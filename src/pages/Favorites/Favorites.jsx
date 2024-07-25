import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const Favorites = () => {
  const { favitems, food_list, removeFromFav } = useContext(StoreContext);

  return (
    <div>
      <div className="flex items-center mt-16 ml-10 mb-10">
        <img className="w-12 h-12" src={assets.profile} alt="" />
        <h2 className="font-bold font-poppins ml-3">Ben "The Hosk" Hosking</h2>
      </div>
      <hr className="border border-gray-300 mt-4 mb-10" />
      <h2 className="font-bold font-poppins text-2xl mt-10 ml-10">Recipe List</h2>
      <div className="ml-10">
        {food_list.map((item, index) => {
          if (favitems[item._id]) {
            return (
              <div key={item._id} className="flex flex-col">
                <div className="flex flex-row items-start mt-10 mb-6">
                  <div className="w-60">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex flex-col justify-between w-full">
                    <div className="ml-4 mt-6">
                      <h2 className="text-xl font-semibold mb-3 font-libreBaskerville">
                        {item.name}
                      </h2>
                      <p className="text-gray-600 mb-4 font-poppins">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex justify-end pr-6">
                      <img
                        className="w-6 h-6 cursor-pointer"
                        src={assets.remove}
                        alt="Remove from favorites"
                        onClick={() => removeFromFav(item._id)}
                      />
                    </div>
                  </div>
                </div>
                <hr className="border border-gray-300 mt-4" />
              </div>
            );
          }
         
        })}
      </div>
    </div>
  );
};

export default Favorites;
