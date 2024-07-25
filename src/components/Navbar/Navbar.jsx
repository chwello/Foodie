import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("");

  return (
    <div className='flex justify-between items-center p-10'>
     <Link to='/'><img src={assets.foodie} alt="" /></Link> 
      <ul className='flex gap-6'>
      <Link to='/'
  onClick={() => setMenu("home")}
  className={menu === "home" ? "active" : ""}
  style={menu === "home" ? { color: '#C43720', fontWeight: 'bold', cursor: 'pointer' } : { cursor: 'pointer' }}
>
  Home
</Link>
<Link to='/recipelist'
  onClick={() => setMenu("recipe")}
  className={menu === "recipe" ? "active" : ""}
  style={menu === "recipe" ? { color: '#C43720', fontWeight: 'bold', cursor: 'pointer' } : { cursor: 'pointer' }}
>
  Recipe
</Link>
<Link to='/favorites'
  onClick={() => setMenu("favorites")}
  className={menu === "favorites" ? "active" : ""}
  style={menu === "favorites" ? { color: '#C43720', fontWeight: 'bold', cursor: 'pointer' } : { cursor: 'pointer' }}
>
  Favorites
</Link>

      </ul>
      <div className='flex gap-4 align-center'>
        <img src={assets.search} alt="" />
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
     
    </div>
  )
}

export default Navbar