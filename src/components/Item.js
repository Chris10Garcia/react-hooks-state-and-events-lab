import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false) 

  function addToCart(){
    setInCart(!inCart)
  }

  const cartStatus = inCart ? "in-cart" : ""

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{inCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
