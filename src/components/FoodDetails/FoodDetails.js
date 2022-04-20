import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFood from "../../Hooks/useFood";
import cart from "../../images/icons/cart.png";

const FoodDetails = () => {
	const { id } = useParams();
	const [foods, setFoods] = useFood();
	const [selectedFood, setSelectedFood] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		const detailsFood = foods.find(food => food.id == id);
		setSelectedFood(detailsFood);
	}, [id, foods]);

	const handleCheckout = id => {
		navigate(`/checkout/${id}`);
	};

	return (
		<div className='container py-5'>
			<div className='row align-items-center'>
				<div className='col-md-6'>
					<h2>{selectedFood?.name}</h2>
					<small>{selectedFood?.description}</small>
					<h4 className='pt-3'>$ {selectedFood?.price}</h4>
					<button
						onClick={() => handleCheckout(selectedFood?.id)}
						className='btn btn-outline-danger'>
						<img src={cart} width='30' alt='' /> ADD
					</button>

					<div className=''></div>
				</div>
				<div className='col-md-6 text-end'>
					<img src={selectedFood?.image} className='w-75' alt='' />
				</div>
			</div>
		</div>
	);
};

export default FoodDetails;
