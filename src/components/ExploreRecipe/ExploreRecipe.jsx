import React, { useState } from "react";
import { menu_list } from "../../assets/assets";

const ExploreRecipe = ({ category, setCategory }) => {
  const [menu, setMenu] = useState("All");

 const handleClick = (item) => {
    setMenu(item.menu_name);
    setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name));
  };

  return (
    <div id="explore-recipe" className="px-4 lg:px-0">
      <h1 className="font-libreBaskerville text-2xl lg:text-3xl text-center lg:text-left">
        Explore different recipes here
      </h1>

      <p className="font-poppins text-sm mt-6 text-center lg:text-left">
        Dive into a variety of cuisines, meal types, and dietary preferences to
        discover new favorites. Our goal is to satisfy your taste buds and make
        every meal a memorable experience.
      </p>

      <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-10">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(item)}
              className={`cursor-pointer font-marcellus ${
                menu === item.menu_name ? "text-red-600 font-bold" : ""
              }`}
            >
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr className="mt-4 border-t-1 border-gray-200" />
    </div>
  );
};

export default ExploreRecipe;
