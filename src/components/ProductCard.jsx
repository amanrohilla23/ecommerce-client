import React from 'react';

export default function ProductCard({ product, handleBuy }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <button
        onClick={() => handleBuy(product)}
        className="mt-3 px-4 py-2 bg-green-600 text-white rounded"
      >
        Buy Now
      </button>
    </div>
  );
}
