import React, { useEffect, useState } from "react";
import Link, { useParams } from "react-router-dom";
import Data from "../data.json";
const FullRecipe = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const recipeData = Data.find((recipe) => {
      return recipe.id === parseInt(id);
    });
    setData(recipeData);
  }, []);

  return (
    <div className="bg-sky-950 text-white">
      <h1>{data.title}</h1>
      <div className="grid grid-cols-2  h-1/2">
        <div className="max-h-96 ">
          <img
            alt="content"
            className=" w-full h-full "
            src={`http://localhost:3000/${data.src}`}
          />
        </div>
        <div className=" bg-sky-950 h-50 p-3">
          <h3 className="text-white uppercase">description</h3>
          <h6 className="text-white uppercase"> {data.description}</h6>
          <h3 className="text-white">ingredients</h3>
          {data.ingredients &&
            data.ingredients.map((ind, index) => (
              <div key={index}>
                {ind.ingredientSize &&
                  ind.ingredientSize.map((size, sizeIndex) => (
                    <p className="text-white mb-0" key={sizeIndex}>
                      {size}
                    </p>
                  ))}
              </div>
            ))}
        </div>
      </div>
      <div>
        <h3>ingredients Sizes</h3>
        {data.ingredients &&
          data.ingredients.map((ingredientObj, index) => (
            <p className="text-white mb-0" key={index}>
              {ingredientObj.ingredient}: {ingredientObj.description}
            </p>
          ))}
      </div>
      <div>
        <h3>Direction</h3>
        <p>{`${data.direction}`}</p>
      </div>
    </div>
  );
};

export default FullRecipe;
