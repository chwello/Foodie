import React, { useState, useContext } from "react";
import { food_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets"; // Ensure correct path to assets

const SearchPage = () => {
  const { favitems, addToFavorite, removeFromFav } = useContext(StoreContext);
  const [searchItem, setSearchItem] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setShowResults(true);
      const filteredResults = food_list.filter(item =>
        item.name.toLowerCase().includes(searchItem.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  return (
    <div className="p-5">
      <div className="mb-5">
        <input
          type="search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:border-gray-300 placeholder-gray-500 w-full"
          placeholder="Search..."
        />
      </div>

      <p>Results for </p>

      {showResults && (
        <div>
          {results.length === 0 ? (
            <p className="text-gray-500">No results found</p>
          ) : (
            <div className="space-y-4">
              {results.map((item) => (
                <div key={item.id} className="p-4 rounded-md">
                  <Link to={`/recipe/${item._id}`} className="flex flex-row items-start p-4">
                    <div className="w-40 sm:w-60">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
                    </div>
                    <div className="ml-4 flex flex-col justify-between w-full">
                      <div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 font-libreBaskerville">
                          {item.name}
                        </h2>
                        <p className="text-gray-600 mb-4 sm:mb-20 font-poppins text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex justify-end pr-6">
                        {!favitems[item.id] ? (
                          <img
                            src={assets.bookmark_icon}
                            alt="Add to favorites"
                            className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              addToFavorite(item.id);
                            }}
                          />
                        ) : (
                          <img
                            src={assets.active_bookmark}
                            alt="Remove from favorites"
                            className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer filter-red"
                            onClick={(e) => {
                              e.preventDefault();
                              removeFromFav(item.id);
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </Link>
                  <hr className="border border-gray-300 mt-4" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
