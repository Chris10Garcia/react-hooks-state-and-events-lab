import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [itemList, setItemList] = useState(items)

  function handleFilter(event){

    const newList = event.target.value === "All" 
                        ? [...items] 
                        : items.filter(obj => obj.category === event.target.value)
    setItemList(newList)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
