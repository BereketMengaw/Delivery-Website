import React from "react";
import "./exploreMenu.css";
import { menu_list } from "../../assets/assets";

function exploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Craving something delicious? Look no further! Our food delivery service
        brings your favorite dishes right to your doorstep. Enjoy a wide variety
        of cuisines, from crispy pizzas to spicy curries, all with just a few
        taps. Satisfy your hunger now!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                //this is the script to
                setCategory((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                )
              }
              className="explore-menu-list-item"
              key={index}
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default exploreMenu;
