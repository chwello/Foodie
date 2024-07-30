import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex justify-between items-center p-5 md:p-10">
      <Link to="/">
        <img src={assets.foodie} alt="Logo" />
      </Link>

      <div className="flex items-center md:hidden">
        <img src={assets.search} alt="Search" className="cursor-pointer" />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4">
          <img src={assets.hamburger_icon} alt="Menu" />
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
        <input
          type="search"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500 placeholder-gray-500"
          placeholder="Search..."
        />

        <button
          onClick={() => setShowLogin(true)}
          className="px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white"
        >
          Sign in
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-16 left-0 right-0 bg-white border-t border-gray-300 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <li>
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
        <li>
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
        <li>
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
        <li>
          <button
            onClick={() => setShowLogin(true)}
            className="px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white w-full text-left"
          >
            Sign in
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
