import React, { useContext } from "react";
import "./foodDisplay.css";
//we import the storeContext which is supplied by store context provider using the function
import { StoreContext } from "../../context/StoreContext";
//to simplify the listing of each foods in other component for the maintainace issue
import FoodItem from "../foodItem/foodItem";

//this function will take props from parent(home.jsx) as category object
function foodDisplay({ category }) {
  //used storecontext value of food_list by use context
  const { food_list } = useContext(StoreContext);

  return (
    <div>
      <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
            if (category === "all" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default foodDisplay;
