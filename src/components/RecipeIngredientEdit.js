import React from "react";

function RecipeIngredientEdit({
  ingredient,
  handleIngredientChange,
  handleIngredientDelete,
}) {
  const { name, amount } = ingredient;

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }
  return (
    <>
      <input
        className="recipe-edit__input"
        onChange={(e) => handleChange({ name: e.target.value })}
        value={name}
        type="text"
      />
      <input
        className="recipe-edit__input"
        onChange={(e) => handleChange({ amount: e.target.value })}
        value={amount}
        type="text"
      />
      <button
        onClick={() => handleIngredientDelete(ingredient.id)}
        className="btn btn--danger"
      >
        &times;
      </button>
    </>
  );
}

export default RecipeIngredientEdit;
