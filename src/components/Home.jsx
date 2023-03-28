import axios from "axios";
import React, { useEffect, useState } from "react";

function Homepage() {
  const [randomRecipe, setrandomRecipe] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?apiKey=2b2a1ed9b21941978f145fe6574f3339"
      )
      .then((response) => {
        console.log(response.data.recipes);
        setrandomRecipe(response.data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { title, image } = randomRecipe.slice(0, 1) || {};

  return (
    <div>
      <h1>Random Recipe</h1>
      <h2>{title}</h2>
      {randomRecipe.map((recipe) => {
        return (
          <div key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Homepage;
