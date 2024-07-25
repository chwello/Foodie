import React, { useState } from "react";
import { menu_list } from "../../assets/assets";

const ExploreRecipe = ({category,setCategory}) => {

  const [menu, setMenu] = useState("All");

  const handleClick = (item) => {
    setMenu(item.menu_name);
    setCategory(prev=>prev===item.menu_name?"All":item.menu_name); // Update the category state
  };


  return (
    <div id="explore-recipe">
      <h1 className="font-libreBaskerville text-3xl">
        Explore different recipe here
      </h1>

      <p className="font-poppins text-sm mt-6">
        Dive into a variety of cuisines, meal types, and dietary preferences to
        discover <br />
        new favorites. Our goal is to satisfy your taste buds and make every
        meal a <br />
        memorable experience.
      </p>

      <div className="mt-9 flex flex-row gap-10 pl-10">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(item)}
              
              className={menu === item.menu_name ? "active" : ""}
              style={
                menu === item.menu_name
                  ? { color: "#C43720", fontWeight: "bold", cursor: "pointer" }
                  : { cursor: "pointer" }
              }
            >
              <p className="font-marcellus">{item.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr className=" mt-2 w-auto border-t-1 border-gray-200" />
    </div>
  );
};

export default ExploreRecipe;