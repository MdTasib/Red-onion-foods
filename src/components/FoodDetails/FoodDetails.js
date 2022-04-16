import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFood from "../../Hooks/useFood";

const FoodDetails = () => {
	const [foods, setFoods] = useFood();
	console.log(foods);

	// const { id } = useParams();

	// const detailsFood = foods.find(food => food.id === id);
	// console.log(detailsFood);

	return (
		<div>
			<h3>Food details</h3>
		</div>
	);
};

export default FoodDetails;
