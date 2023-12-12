import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    getCocktail();
  }, []);

  const getCocktail = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    setCocktail(data.drinks);
    console.log(data);
  };

  const handleRefresh = () => {
    getCocktail();
  };
  return (
    <div className="app">
      {cocktail.map((cocktail) => (
        <div key={cocktail.idDrink} className="cocktail-card">
          <h1> {cocktail.strDrink}</h1>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <p>{cocktail.strInstructions}</p>
          <button onClick={handleRefresh}>Obtener otro cóctel</button>
        </div>
      ))}
    </div>
  );
}
