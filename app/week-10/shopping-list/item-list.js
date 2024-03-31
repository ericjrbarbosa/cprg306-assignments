"use client";

import Item from "./item";
import { useState } from "react";

function ItemList({ items, onItemSelect, onItemDelete }) {
  const [sortBy, setSortBy] = useState("name");
  const itemsGrouped = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }

    acc[item.category].push(item);

    return acc;
  }, {});

  const sortItems = (items, sortBy) => {
    const _items = [...items];

    switch (sortBy) {
      case "category":
        _items.sort((a, b) => {
          const catA = a.category.toUpperCase();
          const catB = b.category.toUpperCase();

          if (catA < catB) return -1;
          if (catA > catB) return 1;
          return 0;
        });
        break;

      case "name":
        _items.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();

          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        break;
    }

    return _items;
  };

  return (
    <>
      <div>
        <label>Sort By: </label>
        <button
          className={`${
            sortBy === "name" ? "bg-orange-500" : "bg-orange-700"
          } p-1 m-2 w-28`}
          onClick={() => setSortBy("name")}>
          Name
        </button>
        <button
          className={`${
            sortBy === "category" ? "bg-orange-500" : "bg-orange-700"
          } p-1 m-2 w-28`}
          onClick={() => setSortBy("category")}>
          Category
        </button>
        <button
          className={`${
            sortBy === "category-group" ? "bg-orange-500" : "bg-orange-700"
          } p-1 m-2 w-28`}
          onClick={() => setSortBy("category-group")}>
          Grouped Cagetory
        </button>
      </div>
      <ul>
        {sortBy === "category-group" &&
          Object.keys(itemsGrouped)
            .sort()
            .map((key) => {
              return (
                <div key={key}>
                  <h3 className="capitalize text-xl">{key}</h3>
                  <ul>
                    {sortItems(itemsGrouped[key], "name").map((item) => (
                      <>
                        <Item
                          category={item.category}
                          key={item.id}
                          name={item.name}
                          quantity={item.quantity}
                          onSelect={() => onItemSelect({ item })}
                          onDelete={() => onItemDelete({ item })}
                        />
                      </>
                    ))}
                  </ul>
                </div>
              );
            })}
        {sortBy !== "category-group" &&
          sortItems(items, sortBy).map((item) => (
            <Item
              category={item.category}
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              onSelect={() => onItemSelect({ item })}
              onDelete={() => onItemDelete({ item })}
            />
          ))}
      </ul>
    </>
  );
}

export default ItemList;
