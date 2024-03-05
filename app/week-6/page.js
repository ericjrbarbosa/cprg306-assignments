"use client";

import React from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    console.log(item);
    setItems([...items, item]);
  };

  return (
    <main className="bg-slate-950">
      <div className="m-4">
        <h2 className="text-3xl font-bold m-2">Shopping List</h2>
        <ItemList items={items} />
        <NewItem onAddItem={handleAddItem} />
      </div>
    </main>
  );
}

export default Page;
