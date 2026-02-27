import React, { useState } from 'react';
import OrderForm from './Components/OrderForm';
import OrderList from './Components/OrderList';
import CompletedOrderList from './Components/CompletedOrders';
import logo from './Tucker\'s.png';

function App() {
  const [orders, setOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const removeOrder = (index) => {
    const completedOrder = orders[index];
    setCompletedOrders([...completedOrders, completedOrder]); // Add to completed orders
    const newOrders = orders.filter((_, i) => i !== index);
    setOrders(newOrders);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-red-600 text-white font-sans">
      <header className="flex flex-col items-center py-8">
        <img src={logo} alt="Tucker's Logo" className="w-40 h-auto rounded-full shadow-lg mb-4" />
        <h1 className="text-4xl font-bold">Tucker's Drink Orderer</h1>
        <p className="text-xl mt-2">Since Tucker is a dog but doesn't bark for some reason, this is how he'll collect orders from people</p>
      </header>

      <main className="container mx-auto p-8">
        <OrderForm addOrder={addOrder} />
        <OrderList orders={orders} removeOrder={removeOrder} />
        <CompletedOrderList completedOrders={completedOrders} />
      </main>
    </div>
  );
}

export default App;
