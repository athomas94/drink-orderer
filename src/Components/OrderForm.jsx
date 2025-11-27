import React, { useState } from 'react';

function OrderForm({ addOrder }) {
  const [name, setName] = useState('');
  const [drink, setDrink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && drink) {
      addOrder({ name, drink });
      setName('');
      setDrink('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Drink:</label>
        <select
          value={drink}
          onChange={(e) => setDrink(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="">Select a drink</option>
          <option value="Moose's Christmas Mule">Moose's Christmas Mule</option>
          <option value="Gouda's Gingerbread Martini">Gouda's Gingerbread Martini</option>
          <option value="Duke's Dark and Stormy">Duke's Dark and Stormy</option>
          <option value="Beer - Budweiser">Beer - Budweiser</option>
          <option value="Beer - Michelob">Beer - Michelob</option>
          <option value="Beer - Stormbrew">Beer - Stormbrew</option>
          <option value="Other - Water">Other - Water</option>
          <option value="Other - Dr. Pepper">Other - Dr. Pepper</option>
          <option value="Other - Diet Coke">Other - Diet Coke</option>
          <option value="Other - Coke Zero">Other - Coke  Zero</option>
          <option value="Other - Milk">Other - Milk</option>
        </select>
      </div>
      <button type="submit" className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700">
        Add Order
      </button>
    </form>
  );
}

export default OrderForm;
