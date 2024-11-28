import React from 'react';

function Order({ order, index, removeOrder }) {
  return (
    <li className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center">
      <span className="text-gray-800 font-medium">{order.name} - {order.drink}</span>
      <button
        onClick={() => removeOrder(index)}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Mark as Fulfilled
      </button>
    </li>
  );
}

export default Order;
