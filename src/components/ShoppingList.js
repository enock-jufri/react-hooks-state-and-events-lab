import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All")

  function filter(e,) {
    setCategory(e.target.value)

  }
  const updateditems = items.filter(item => {
    if (selectedCategory === "All") {
      return item
    }
    else if (selectedCategory === item.category) {
      return item
    }
  })
  console.log(updateditems)
  console.log(selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {updateditems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
