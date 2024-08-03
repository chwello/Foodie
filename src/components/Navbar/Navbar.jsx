import React, { useState } from "react";
import { assets, food_list } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";


const Navbar = ({ setShowLogin }) => {
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(food_list);

  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = food_list.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  const handleSearchResultClick = (id) => {
    setSearchItem('');
    setFilteredUsers(food_list);
    navigate(`/recipe/${id}`); 
  };

  return (
    <div className="relative flex justify-between items-center p-5 md:p-10">
      <Link to="/">
        <img src={assets.foodie} alt="Logo" className="h-8 md:h-6" />
      </Link>

      <div className="flex items-center md:hidden">
       <Link to='/searchpage'><img src={assets.search} alt="Search" className="cursor-pointer h-8" /></Link> 
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4">
          <img src={assets.hamburger_icon} alt="Menu" className="h-8" />
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <ul className="flex gap-6 mr-10">
          <li>
            <Link
              to="/"
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
              style={
                menu === "home"
                  ? { color: "#C43720", fontWeight: "bold", cursor: "pointer" }
                  : { cursor: "pointer" }
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/recipelist"
              onClick={() => setMenu("recipe")}
              className={menu === "recipe" ? "active" : ""}
              style={
                menu === "recipe"
                  ? { color: "#C43720", fontWeight: "bold", cursor: "pointer" }
                  : { cursor: "pointer" }
              }
            >
              Recipe
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              onClick={() => setMenu("favorites")}
              className={menu === "favorites" ? "active" : ""}
              style={
                menu === "favorites"
                  ? { color: "#C43720", fontWeight: "bold", cursor: "pointer" }
                  : { cursor: "pointer" }
              }
            >
              Favorites
            </Link>
          </li>
        </ul>
        <div className="relative">
          <input
            type="search"
            value={searchItem}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500 placeholder-gray-500"
            placeholder="Search..."
          />

          {searchItem && (
            <ul className="absolute top-full left-0 mt-2 border border-gray-300 bg-white shadow-lg rounded-md w-full">
              {filteredUsers.length > 0 ? (
                <>
                  {filteredUsers.map((item) => (
                    <li
                      key={item._id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => handleSearchResultClick(item._id)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <span>{item.name}</span>
                    </li>
                  ))}
                  <li className="px-4 py-2 border-t border-gray-300 text-center text-hray-500 hover:text-[#C43720] cursor-pointer">
                    <Link to="/recipelist">View All</Link>
                  </li>
                </>
              ) : (
                <li className="px-4 py-2 text-center text-gray-500">No results found</li>
              )}
            </ul>
          )}
        </div>

        <button
          onClick={() => setShowLogin(true)}
          className="px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white"
        >
          Sign in
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-16 left-auto pl-10 right-0 bg-white border-t border-gray-300 md:hidden z-10 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <li className="mt-4 mb-2">
          <Link
            to="/"
            onClick={() => {
              setMenu("home");
              setIsMenuOpen(false);
            }}
            className={menu === "home" ? "active" : ""}
            style={
              menu === "home"
                ? { color: "#C43720", fontWeight: "bold", cursor: "pointer" }
                : { cursor: "pointer" }
            }
          >
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/recipelist"
            onClick={() => {
              setMenu("recipe");
              setIsMenuOpen(false);
            }}
            className={menu === "recipe" ? "active" : ""}
            style={
              menu === "recipe"
                ? { color: "#C43720", fontWeight: "bold", cursor: "pointer" }
                : { cursor: "pointer" }
            }
          >
            Recipe
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/favorites"
            onClick={() => {
              setMenu("favorites");
              setIsMenuOpen(false);
            }}
            className={menu === "favorites" ? "active" : ""}
            style={
              menu === "favorites"
                ? { color: "#C43720", fontWeight: "bold", cursor: "pointer" }
                : { cursor: "pointer" }
            }
          >
            Favorites
          </Link>
        </li>
        <li className="mb-4">
          <button
            onClick={() => setShowLogin(true)}
            className=" text-black rounded-md hover:bg-black hover:text-white text-left"
          >
            Sign in
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
