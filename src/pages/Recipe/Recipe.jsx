import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import FoodItem from "../../components/Fooditem/FoodItem";
import { StoreContext } from "../../context/StoreContext";

const Recipe = () => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="justify-center items-center ml-14">
      <div className="flex flex-col sm:flex-row gap-4 mt-16">
        <div className="relative w-full sm:w-1/3 h-56">
          <img
            src={assets.recipepage_1}
            alt="Emerald Harmony Cake"
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute bottom-10 left-2 text-white text-xl font-medium font-libreCaslonText px-2 rounded-md z-10">
            Emerald Harmony Cake
          </div>
          <div className="absolute bottom-2 left-2 flex items-center gap-2 z-10 ml-3 mb-3">
            <img
              src={assets.jennie_profile}
              alt="Profile"
              className="w-4 h-4 rounded-full"
            />
            <p className="text-white font-poppins text-xs font-medium">
              Jennie Kim
            </p>
          </div>
        </div>
        <div className="relative w-full sm:w-1/4 h-56">
          <img
            src={assets.recipepage_4}
            alt="Zen Green Matcha Pancakes"
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute bottom-10 left-2 text-white text-xl font-medium font-libreCaslonText px-2 rounded-md z-10">
            Zen Green Matcha Pancakes
          </div>
        </div>
        <div className="relative w-full sm:w-1/3 h-56">
          <img
            src={assets.recipepage_3}
            alt="Dream Pancake Stack"
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute bottom-10 left-2 text-white text-xl font-medium font-libreCaslonText px-2 rounded-md z-10">
            Dream Pancake Stack
          </div>
        </div>
      </div>

      <div className="mt-32 font-libreBaskerville font-bold text-2xl">
        <p>What to cook this week</p>
      </div>

      <div>
        {food_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
