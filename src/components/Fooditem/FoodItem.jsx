import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const FoodItem = ({ id, name, description, image }) => {
  const { favitems, addToFavorite, removeFromFav } = useContext(StoreContext);

  return (
    <div className="mt-8">
      <Link to={`/recipe/${id}`} className="flex flex-row items-start p-4">
        <div className="w-40 sm:w-60">
          <img src={image} alt="" className="w-full h-full object-cover rounded-md" />
        </div>
        <div className="ml-4 flex flex-col justify-between w-full">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3 font-libreBaskerville">
              {name}
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-20 font-poppins text-sm sm:text-base">
              {description}
            </p>
          </div>
          <div className="flex justify-end pr-6">
            {!favitems[id] ? (
              <img
                src={assets.bookmark_icon}
                alt="Add to favorites"
                className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  addToFavorite(id);
                }}
              />
            ) : (
              <img
                src={assets.active_bookmark}
                alt="Remove from favorites"
                className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer filter-red"
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
