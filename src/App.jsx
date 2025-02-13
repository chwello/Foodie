import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Login from "./components/Login/Login";
import Recipe from "./pages/Recipe/Recipe";


import RecipeDisplay from "./components/RecipeDisplay/RecipeDisplay";
import SearchPage from "./components/SearchPage.jsx/SearchPage";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="w-4/5 m-auto">
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe/:id" element={<RecipeDisplay />} />
        <Route path="/recipelist" element ={<Recipe/>}/>
        <Route path="/searchpage" element={<SearchPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
