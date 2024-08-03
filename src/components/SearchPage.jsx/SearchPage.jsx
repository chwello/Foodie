import React, { useState, useContext } from "react";
import { food_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets"; 
import FoodItem from "../Fooditem/FoodItem";

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

      {showResults && (
        <div>
          {results.length === 0 ? (
            <p className="text-gray-500">No results found</p>
          ) : (
            <div className="mt-8">
              {results.map((item, index) => (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
