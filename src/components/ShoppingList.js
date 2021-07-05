import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [foodCategory, setFoodCategory] = useState("All")

  function CategoryChange(e){
    setFoodCategory(e.target.value)
  }
  const CartItems = items.filter((item) => {
    if (foodCategory === "All") return true

    return item.category === foodCategory
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={CategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {CartItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
