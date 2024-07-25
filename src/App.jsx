import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Login from "./components/Login/Login";


import RecipeDisplay from "./components/RecipeDisplay/RecipeDisplay";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="w-4/5 m-auto">
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe/:id" element={<RecipeDisplay />} />
      </Routes>
    </div>
  );
};

export default App;
