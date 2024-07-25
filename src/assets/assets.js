import food_1 from "./food_1.jpeg";
import food_2 from "./food_2.webp"
import food_3 from "./food_3.webp"
import food_4 from "./food_4.webp"

import admin_logo from "./admin_logo.svg"
import add_image from "./add_image.png"
import bookmark_icon from "./bookmark_icon.svg"
import foodie from "./Foodie.svg"
import profile from "./profile.png"
import remove from "./remove.png"
import search from "./search_icon.svg"
import share from "./share.svg"
import cross from "./cross.svg"
import active_bookmark from "./active_bookmark.svg"

import recipepage_1 from "./recipepage_1.jpeg"
import recipepage_2 from "./recipepage_2.jpeg"
import recipepage_3 from "./recipepage_3.jpeg"
import recipepage_4 from "./recipepage_4.jpeg"

import jennie_profile from "./jennie_profile.png"
export const assets = {
  admin_logo,
  add_image,
  bookmark_icon,
  foodie,
  profile,
  remove,
  search,
  share,
  food_1,
  cross,
  active_bookmark,
  recipepage_1,
  recipepage_2,
  recipepage_3,
  recipepage_4,
  jennie_profile
}

//category
export const menu_list = [
  {
    menu_name: "All"
  },
  {
    menu_name: "Dessert",
  },
  {
    menu_name: "Pasta",
  },
  {
    menu_name: "Meal",
  },
  {
    menu_name: "Drinks",
  },
];
//recipe list
export const food_list = [
  {
    _id: "1",
    name: "Wafflemeister Belgian Waffles",
    image: food_1,
    description: "Crispy on the outside and fluffy on the inside, these Belgian waffles are perfect for breakfast or dessert.",
    time: "30 minutes",
    ingredients: "2 cups all-purpose flour, 1/4 cup sugar, 1 tbsp baking powder, 1/2 tsp salt, 2 large eggs, 1 3/4 cups milk, 1/2 cup vegetable oil, 1 tsp vanilla extract",
    directions: "1 Preheat your waffle iron.2 In a large bowl, whisk together the flour, sugar, baking powder, and salt. 3 In another bowl, beat the eggs and then add the milk, vegetable oil, and vanilla extract. 4 Pour the wet ingredients into the dry ingredients and stir until just combined. 5 Pour the batter onto the preheated waffle iron and cook according to the manufacturer's instructions. 6 Serve with your favorite toppings.",
    category: "Dessert",
  },
  {
    _id: "2",
    name: "Chicken Alfredo Pasta",
    image: food_2,
    description: "A creamy and delicious pasta dish with tender pieces of chicken and a rich Alfredo sauce.",
    time: "30 minutes",
    ingredients: "12 oz fettuccine pasta, 2 tbsp olive oil, 2 boneless chicken breasts, 1/2 tsp salt, 1/2 tsp pepper, 2 cloves garlic, minced, 1 cup heavy cream, 1 cup grated Parmesan cheese, 1/2 cup butter, 1/4 cup chopped parsley",
    directions: "1 Cook the pasta according to package instructions. Drain and set aside. 2 In a large skillet, heat the olive oil over medium heat. 3 Season the chicken with salt and pepper, then cook in the skillet until golden brown and cooked through, about 6-7 minutes per side. Remove from the skillet and slice into strips. 4 In the same skillet, add the garlic and cook until fragrant, about 1 minute. 5 Add the heavy cream, Parmesan cheese, and butter, stirring until the sauce is smooth and creamy. 6 Add the cooked pasta and chicken to the skillet, tossing to coat in the sauce. 7 Garnish with chopped parsley and serve immediately.",
    category: "Pasta",
  },
  {
    _id: "3",
    name: "Lamb Meatballs With Pecan Romesco",
    image: food_3,
    description: "Savory lamb meatballs served with a flavorful pecan Romesco sauce, perfect for a hearty meal.",
    time: "30 minutes",
    ingredients: "1 lb ground lamb, 1/2 cup breadcrumbs, 1/4 cup grated Parmesan cheese, 1 egg, 2 cloves garlic, minced, 1 tsp salt, 1/2 tsp pepper, 1/4 cup chopped fresh parsley, 1/2 cup pecans, 1 roasted red pepper, 1 clove garlic, 1/4 cup olive oil, 1 tbsp red wine vinegar, 1/4 tsp smoked paprika",
    directions: "1 Preheat your oven to 375°F (190°C). 2 In a large bowl, combine the ground lamb, breadcrumbs, Parmesan cheese, egg, garlic, salt, pepper, and parsley. Mix until well combined. 3 Form the mixture into meatballs and place on a baking sheet. 4 Bake for 15-20 minutes, or until cooked through. 5 While the meatballs are baking, prepare the Romesco sauce by blending the pecans, roasted red pepper, garlic, olive oil, red wine vinegar, and smoked paprika in a food processor until smooth. 6 Serve the meatballs with the Romesco sauce on the side.",
    category: "Meal",
  },
  {
    _id: "4",
    name: "Garden Party Super Punch",
    image: food_4,
    description: "A refreshing and fruity punch perfect for summer parties and gatherings.",
    time: "30 minutes",
    ingredients: "4 cups pineapple juice, 2 cups orange juice, 1 cup cranberry juice, 1 cup sparkling water, 1/4 cup lime juice, 1/4 cup grenadine, 1/2 cup sliced strawberries, 1/2 cup pineapple chunks, 1/2 cup orange slices, Fresh mint leaves for garnish",
    directions: "1 In a large punch bowl, combine the pineapple juice, orange juice, cranberry juice, sparkling water, and lime juice. 2 Stir in the grenadine. 3 Add the sliced strawberries, pineapple chunks, and orange slices. 4 Refrigerate for at least 1 hour before serving. 5 Serve chilled, garnished with fresh mint leaves.",
    category: "Drinks",
  },
];


//Lamb Meatballs With Pecan Romesco
