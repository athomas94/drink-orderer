import React from 'react';

function CompletedOrders({ completedOrders }) {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4">Order Up!</h2>
      {completedOrders.length > 0 ? (
        <ul className="space-y-4">
          {completedOrders.map((order, index) => (
            <li
              key={index}
              className="bg-green-100 p-4 rounded-lg shadow-lg text-gray-800 font-medium"
            >
              {order.name} - {order.drink}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl text-white">Still working on it!</p>
      )}
    </div>
  );
}

export default CompletedOrders;