import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreRecipe from '../../components/ExploreRecipe/ExploreRecipe'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreRecipe category={category} setCategory={setCategory}/>
      <FoodDisplay  category={category} />
      
    </div>
  )
}

export default Home