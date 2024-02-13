"use client";

import { useState } from "react";

const NewItem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const categoryOptions = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  const handelSubmit = () => {
    const item = { name, quantity, category };

    console.log(item);

    alert(
      `Added item: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
      onSubmit={handelSubmit}>
      <div className="mb-2">
        <input
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          onChange={(event) => setName(event.target.value)}
          placeholder="Item name"
          required
          type="text"
          value={name}
        />
      </div>
      <div className="flex justify-between">
        <input
          className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          onChange={(event) => setQuantity(parseInt(event.target.value))}
          max={99}
          min={1}
          required
          type="number"
          value={quantity}
        />
        <select
          className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          onChange={(event) => setCategory(event.target.value)}
          value={category}>
          <option
            disabled
            value={""}>
            Category
          </option>
          {categoryOptions.map((categoryOption) => (
            <option
              key={categoryOption}
              value={categoryOption.toLowerCase()}>
              {categoryOption}
            </option>
          ))}
        </select>
      </div>
      <button
        className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        type="submit">
        +
      </button>
    </form>
  );
};

export default NewItem;
