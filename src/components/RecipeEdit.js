import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from "./App";
import { v4 as uuidv4 } from "uuid";

function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);
  const { id, name, cookTime, servings, instructions, ingredients } = recipe;

  function handleChange(changes) {
    handleRecipeChange(id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
  }

  function handleIngredientDelete(id) {
    handleChange({
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  }
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          onClick={() => handleRecipeSelect(undefined)}
          className="btn recipe-edit__remove-button"
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label className="recipe-edit__label" htmlFor="name">
          Name
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          value={name}
          onChange={(e) => handleChange({ name: e.target.value })}
          name="name"
          id="name"
        />
        <label className="recipe-edit__label" htmlFor="cookTime">
          Cook Time
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          value={cookTime}
          onChange={(e) => handleChange({ cookTime: e.target.value })}
          name="cookTime"
          id="cookTime"
        />
        <label className="recipe-edit__label" htmlFor="servings">
          Servings
        </label>
        <input
          className="recipe-edit__input"
          type="number"
          min="1"
          onChange={(e) =>
            handleChange({ servings: parseInt(e.target.value) || "" })
          }
          value={servings}
          name="servings"
          id="servings"
        />
        <label className="recipe-edit__label" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          className="recipe-edit__input"
          name="instructions"
          id="instructions"
          value={instructions}
          onChange={(e) => handleChange({ instructions: e.target.value })}
        ></textarea>
      </div>
      <br />
      <label className="recipe-edit__label" htmlFor="">
        Ingredients
      </label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
          />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button onClick={handleIngredientAdd} className="btn btn--primary">
          Add Ingredient
        </button>
      </div>
    </div>
  );
}

export default RecipeEdit;
