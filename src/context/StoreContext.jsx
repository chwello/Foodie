import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [favitems, setFavItems] = useState({});

  const addToFavorite = (itemId) => {
    if (!favitems[itemId]) {
      setFavItems((prev) => ({ ...prev, [itemId]: 1 }));
    }
  };

  const removeFromFav = (itemId) => {
    setFavItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    food_list,
    favitems,
    setFavItems,
    addToFavorite,
    removeFromFav,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
