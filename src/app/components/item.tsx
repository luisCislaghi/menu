import React from "react";

const MenuItem: React.FC<{ ingredients: string[]; name: string }> = ({
  ingredients,
  name,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItem;
