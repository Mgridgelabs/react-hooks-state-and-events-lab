import React, { useState } from "react";

function Item({ name, category }) {
  const [incart,setInCart] = useState(false)

  const handleClick = ()=> {
    setInCart(!incart);
  }
  return (
    <li className={incart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onclick={handleClick}>
        {incart ? "Remove from cart" : "Add to cart"}
      </button>
    </li>
  );
}

export default Item;
