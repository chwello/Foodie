import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const Favorites = () => {
  const { favitems, food_list, removeFromFav } = useContext(StoreContext);

  return (
    <div className="px-4 sm:px-10">
      <div className="flex flex-col sm:flex-row items-center mt-16 mb-10">
        <img className="w-12 h-12" src={assets.profile} alt="Profile" />
        <h2 className="font-bold font-poppins ml-0 sm:ml-3 mt-4 sm:mt-0">
          Ben "The Hosk" Hosking
        </h2>
      </div>
      <hr className="border border-gray-300 mt-4 mb-10" />
      <h2 className="font-bold font-poppins text-xl sm:text-2xl mt-10">
        Recipe List
      </h2>
      <div>
        {food_list.map((item) => {
          if (favitems[item._id]) {
            return (
              <div key={item._id} className="flex flex-col sm:flex-row items-start mt-10 mb-6">
                <div className="w-full sm:w-60">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-0 sm:ml-4 flex flex-col justify-between w-full mt-4 sm:mt-0">
                  <div className="ml-4 sm:ml-0">
                    <h2 className="text-lg sm:text-xl font-semibold mb-3 font-libreBaskerville">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 mb-4 font-poppins">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex justify-end pr-0 sm:pr-6 mt-4 sm:mt-0">
                    <img
                      className="w-6 h-6 cursor-pointer"
                      src={assets.remove}
                      alt="Remove from favorites"
                      onClick={() => removeFromFav(item._id)}
                    />
                  </div>
                </div>
                <hr className="border border-gray-300 w-full sm:hidden mt-4" />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Favorites;
