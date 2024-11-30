import React,{useState} from "react";

function Item({ name, category }) {
  const [add,setadd]=useState(false)

  function addCart(){
    setadd(add=>!add)
  }

  const cart= add? "in-cart":""
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
