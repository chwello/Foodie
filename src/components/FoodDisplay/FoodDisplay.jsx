import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../Fooditem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div id="food-display">
      <div>
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            );
          }
          
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
