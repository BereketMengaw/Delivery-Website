import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./foodItem.css";
import { StoreContext } from "../../context/StoreContext";

function FoodItem({ id, name, price, description, image }) {
  const [cartItems, addToCart, removeFromCart] = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {!cartItems[id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            alt=""
            onClick={() => addToCart}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt=""
              onClick={() => removeFromCart[id]}
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt=""
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating ">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
