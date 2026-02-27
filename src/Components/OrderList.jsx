import React from 'react';
import Order from './Order';

function OrderList({ orders, removeOrder }) {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4">In the Queue</h2>
      {orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order, index) => (
            <Order
              key={index}
              index={index}
              order={order}
              removeOrder={removeOrder}
            />
          ))}
        </ul>
      ) : (
        <p className="text-xl text-white">Job's done!</p>
      )}
    </div>
  );
}

export default OrderList;
