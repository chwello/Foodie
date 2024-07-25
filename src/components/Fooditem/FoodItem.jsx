import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const FoodItem = ({ id, name, description, image }) => {
  const { favitems, addToFavorite, removeFromFav } = useContext(StoreContext);

  return (
    <div className="mt-20">
      <Link to={`/recipe/${id}`} className="flex flex-row items-start">
        <div className="w-60 ml-6">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="ml-4 flex flex-col justify-between w-full">
          <div className="ml-4 mt-6">
            <h2 className="text-xl font-semibold mb-3 font-libreBaskerville">
              {name}
            </h2>
            <p className="text-gray-600 mb-20 font-poppins">{description}</p>
          </div>
          <div className="flex justify-end pr-6">
            {!favitems[id] ? (
              <img
                src={assets.bookmark_icon}
                alt="Add to favorites"
                className="w-6 h-6 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  addToFavorite(id);
                }}
              />
            ) : (
              <img
                src={assets.active_bookmark}
                alt="Remove from favorites"
                className="w-6 h-6 cursor-pointer filter-red"
                onClick={(e) => {
                  e.preventDefault();
                  removeFromFav(id);
                }}
              />
            )}
          </div>
        </div>
      </Link>
      <hr className="border border-gray-300 mt-4" />
    </div>
  );
};

export default FoodItem;
