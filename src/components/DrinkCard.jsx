import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

export default function DrinkCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const drinkTags = () => {
    const tags = [];
    for (let i = 1; i <= 15; i++) {
      if (props.drink[`strIngredient${i}`]) {
        tags.push(props.drink[`strIngredient${i}`]);
      }
    }
    return tags;
  };

  const instructions = props.drink.strInstructions;
  const shouldShowMore = instructions.length > 100;

  const tags = drinkTags();

  return (
    <div className="bg-gray-900 text-neutral-50 w-full p-4 rounded-2xl justify-between min-h-full h-full flex flex-row gap-4">
      <Link to={`/drink/${props.drink.idDrink}`}>
        <div className="flex flex-row justify-between items-start">
          <img
            className="h-40 w-40 rounded-2xl"
            src={props.drink.strDrinkThumb}
            alt={props.drink.strDrink}
          />
          <div className="flex flex-col justify-between gap-2">
            <MdOutlineFavorite className="text-red-500 text-2xl" />
            <FaShoppingCart className="text-2xl" />
          </div>
        </div>

        <div className="flex flex-row justify-baseline flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-800 text-neutral-50 rounded-full px-2 py-1 m-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col justify-between">
          <h1 className="text-lg font-semibold">{props.drink.strDrink}</h1>
          <p
            className={`text-sm text-balance overflow-auto ${isExpanded ? "max-h-none" : "max-h-20"}`}
          >
            {isExpanded ? instructions : `${instructions.substring(0, 100)}...`}
          </p>
          {shouldShowMore && (
            <button onClick={toggleExpand} className="text-white mt-2 text-sm">
              {isExpanded ? "Show Less" : "Show More...."}
            </button>
          )}
        </div>
      </Link>
    </div>
  );
}
