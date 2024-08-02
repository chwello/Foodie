import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";

const RecipeDisplay = () => {
  const { food_list } = useContext(StoreContext);
  const { id } = useParams();
  const recipeItem = food_list.find((item) => item._id === id);

  if (!recipeItem) {
    return <div>Food item not found</div>;
  }
  return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-36">
      <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-40 lg:gap-32 gap-6 w-full">
        <div className="">
          <h2 className="font-poppins text-2xl lg:text-3xl font-bold">
            {recipeItem.name}
          </h2>
          <div className="flex-shrink-0 flex gap-4 items-center mt-4 lg:mt-0">
            <img src={assets.bookmark_icon} alt="Bookmark" />
            <img src={assets.share} alt="Share" />
          </div>
         
        </div>
      </div>

      <div className="flex items-center mt-6 lg:mt-10 mb-10 gap-4">
        <img className="w-12 h-12 ml-4" src={assets.profile} alt="" />
        <p className="font-poppins font-medium">Ben "The Hosk" Hosking</p>
      </div>
      <hr className="border border-gray-300 mt-4" />
      <p className="mt-10 mb-10 font-poppins">{recipeItem.description}</p>
      <img className="w-full h-auto" src={recipeItem.image} alt="" />

      <div className="flex items-center mt-10">
        <div>
          <h5 className="font-poppins font-bold">PREP TIME</h5>
          <p>{recipeItem.time}</p>
        </div>
        <hr className="w-px h-10 mx-4 bg-gray-200" />
        <div className="font-marcellus text-center">
          <p>Recipe information</p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-marcellus mb-5 text-2xl font-medium">
          Ingredients
        </h2>
        <div>
          {recipeItem.ingredients.split(",").map((ingredient, index) => (
            <div key={index}>{ingredient.trim()}</div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-marcellus mb-5 text-2xl font-medium">Directions</h2>
        <div>
          {recipeItem.directions.split(".").map((direction, index) => (
            <p key={index}>{direction.trim()}</p>
          ))}
        </div>
      </div>
      <div className="mt-20 mb-14">
        <p className="font-libreBaskerville font-bold text-2xl lg:text-3xl">
          Got feedback? We’d love to hear from you!
        </p>
      </div>
      <p className="font-libreBaskerville font-bold text-lg">Reviews</p>
      <div className="mt-6">
        <input
          type="text"
          placeholder="write here"
          className="border-b border-gray-300 focus:border-gray-400 outline-none w-full"
        />
      </div>

      <div className="flex items-center mt-16 mb-6">
        <img className="w-10 h-10" src={assets.profile} alt="" />
        <h2 className="font-medium text-sm font-poppins ml-3">
          Ben "The Hosk" Hosking
        </h2>
        <small className="ml-4 font-poppins text-gray-500">22 min</small>
      </div>
      <div className=" mb-10">
        <p className="font-poppins text-sm">
          I tried the chocolate cake recipe, and it was fantastic! The
          instructions were clear, and the cake turned out moist and delicious.
          Definitely a keeper!
        </p>
      </div>
    </div>
  );
};

export default RecipeDisplay;
