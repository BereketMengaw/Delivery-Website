import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  //destructuring of the state variable and state function for the future use of the fuction to be exported

  //this is object with the name of cartItems
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedItems = { ...prev };
      if (updatedItems[itemId] > 1) {
        updatedItems[itemId] -= 1;
      } else {
        delete updatedItems[itemId];
      }
      return updatedItems;
    });
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  useEffect(() => console.log(cartItems));

  //we created the first storecontext for the use of .provider functionality which will be used to adress child elements
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

//for the use of main.js to decide which can object can access the context
export default StoreContextProvider;
