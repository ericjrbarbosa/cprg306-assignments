"use client";

import { useEffect, useState } from "react";

const fetchMealIdeas = async ({ ingredient }) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    const data = await response.json();

    return data.meals;
  } catch (e) {
    console.log(e.message);
  }
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async ({ ingredient }) => {
    setMeals(await fetchMealIdeas({ ingredient }));
  };

  useEffect(() => {
    loadMealIdeas({ ingredient });
  }, [ingredient]);

  return (
    <div>
      <h3 className="text-xl font-bold">Meal Ideas</h3>
      {ingredient ? (
        meals ? (
          <div>
            <p>Here are some meal ideas using {ingredient}:</p>
            <ul>
              {meals &&
                meals.map((meal) => (
                  <li
                    key={meal.idMeal}
                    className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">
                    {meal.strMeal}
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          <p>No meal ideas found for {ingredient}</p>
        )
      ) : (
        <p>Select an item to see meal ideas</p>
      )}
    </div>
  );
};

export default MealIdeas;
