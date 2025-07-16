import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: "Shoes", price: 1999 },
  { id: 2, name: "Laptop", price: 49999 },
  { id: 3, name: "Phone", price: 29999 }
];

export default function Home({ user }) {
  const handleBuy = async (product) => {
  try {
    const res = await fetch('http://localhost:5000/api/payment/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: product.price * 100 }) // 💰 Convert to paise
    });

    const { orderId } = await res.json();

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY, // ✅ Load from .env
      amount: product.price * 100,
      currency: "INR",
      name: "TensorGo Store",
      description: `Purchase of ${product.name}`,
      order_id: orderId,
      handler: async function (response) {
        // 🟢 Post-payment backend confirmation
        await fetch("http://localhost:5000/api/payment/success", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            productName: product.name,
            userEmail: user.email,
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id
          })
        });

        alert("✅ Payment Successful & Email Sent!");
      },
      prefill: {
        name: user?.displayName || "Guest",
        email: user?.email || "test@example.com"
      },
      theme: { color: "#3399cc" }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (error) {
    console.error("❌ Payment Error:", error);
    alert("Something went wrong during payment.");
  }
};
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 min-h-screen">
      {products.map(prod => (
        <ProductCard key={prod.id} product={prod} handleBuy={handleBuy} />
      ))}
    </div>
  );
}
