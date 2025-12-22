import React, { useState, useEffect } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "../drinks.json";

const BaristaForm = () => {
  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: ""
  });

  // correctness indicators for styling
  const [correctTemp, setCorrectTemp] = useState("");
  const [correctMilk, setCorrectMilk] = useState("");
  const [correctSyrup, setCorrectSyrup] = useState("");
  const [correctBlended, setCorrectBlended] = useState("");

  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    milk: ["cow", "oat", "goat", "almond", "none"],
    blended: ["yes", "turbo", "no"]
  };

  const [currentDrink, setCurrentDrink] = useState("");
  const [trueRecipe, setTrueRecipe] = useState({});

  const getNextDrink = () => {
    const randomDrinkIndex = Math.floor(
      Math.random() * drinksJson.drinks.length
    );
    const drink = drinksJson.drinks[randomDrinkIndex];

    setCurrentDrink(drink.name);
    setTrueRecipe(drink.ingredients);
  };

  const onNewDrink = () => {
    setInputs({
      temperature: "",
      milk: "",
      syrup: "",
      blended: ""
    });

    // reset correctness borders
    setCorrectTemp("");
    setCorrectMilk("");
    setCorrectSyrup("");
    setCorrectBlended("");

    getNextDrink();
  };

  function onCheckAnswer(e) {
    e.preventDefault(); // Stop page reload since button is inside a form

    setCorrectTemp(
      inputs.temperature === trueRecipe.temperature ? "correct" : "wrong"
    );

    setCorrectMilk(
      inputs.milk === trueRecipe.milk ? "correct" : "wrong"
    );

    setCorrectSyrup(
      inputs.syrup === trueRecipe.syrup ? "correct" : "wrong"
    );

    setCorrectBlended(
      inputs.blended === trueRecipe.blended ? "correct" : "wrong"
    );
  }

  useEffect(() => {
    getNextDrink();
  }, []);

  return (
    <div className="app">
      <h2>Hi, I would like to order a:</h2>

      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button className="newdrink button" onClick={onNewDrink}>
          🔄
        </button>
      </div>

      <form className="container">
        {/* Temperature */}
        <div className="mini-container">
          <h3>Temperature</h3>
          <div className={`answer-space ${correctTemp}`}>
            {inputs.temperature}
          </div>
          <RecipeChoices
            label="temperature"
            choices={ingredients.temperature}
            currentVal={inputs.temperature}
            handleChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))
            }
          />
        </div>

        {/* Milk */}
        <div className="mini-container">
          <h3>Milk</h3>
          <div className={`answer-space ${correctMilk}`}>
            {inputs.milk}
          </div>
          <RecipeChoices
            label="milk"
            choices={ingredients.milk}
            currentVal={inputs.milk}
            handleChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))
            }
          />
        </div>

        {/* Syrup */}
        <div className="mini-container">
          <h3>Syrup</h3>
          <div className={`answer-space ${correctSyrup}`}>
            {inputs.syrup}
          </div>
          <RecipeChoices
            label="syrup"
            choices={ingredients.syrup}
            currentVal={inputs.syrup}
            handleChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))
            }
          />
        </div>

        {/* Blended */}
        <div className="mini-container">
          <h3>Blended</h3>
          <div className={`answer-space ${correctBlended}`}>
            {inputs.blended}
          </div>
          <RecipeChoices
            label="blended"
            choices={ingredients.blended}
            currentVal={inputs.blended}
            handleChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))
            }
          />
        </div>
      </form>

      <button className="button newdrink" onClick={onNewDrink}>
        New Drink
      </button>

      <button className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>
    </div>
  );
};

export default BaristaForm;
