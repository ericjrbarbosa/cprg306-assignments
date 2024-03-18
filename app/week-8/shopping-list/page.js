"use client";

import React from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState();

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = ({ item }) => {
    const itemName = item.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();

    setSelectedItemName(itemName);
  };

  if (!user) return "Your need to be signed in to view this page.";

  return (
    <main className="bg-slate-950">
      <div className="m-4">
        <h2 className="text-3xl font-bold m-2">Shopping List</h2>
        <div className="flex">
          <div className="flex-1 max-w-sm m-2">
            <NewItem onAddItem={handleAddItem} />
            <ItemList
              items={items}
              onItemSelect={handleItemSelect}
            />
          </div>
          <div className="flex-1 max-w-sm m-2">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
