import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Row } from "../Grid";

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map(ingredient => {
    return (
      <Row key={uuidv4()} className="ingredient-colst">
        <col className="ingredient-text">{ingredient.text}</col>
        <col className="ingredient-weight">Weight - {ingredient.weight}</col>
      </Row>
    );
  });
};

export default RecipeDetails;