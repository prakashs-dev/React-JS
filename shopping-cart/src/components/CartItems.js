import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/Actions/cartAction";

const CartItems = ({ item }) => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoval = (id) => {
    dispatch(removeItem(id));
    if (localStorage.getItem("cart-items")) {
      localStorage.setItem("cart-items", JSON.stringify([...cartData]));
    }
  };
  return (
    <div className="items">
      <img src={item.thumbnail} alt={item.title} loading="lazy" />
      <div>
        <p className="category">{item.category}</p>
        <p>Title : {item.title}</p>
        <p>Price : $ {item.price}</p>
        <button onClick={() => handleRemoval(item.id)}>Remove Cart</button>
      </div>
    </div>
  );
};

export default CartItems;
