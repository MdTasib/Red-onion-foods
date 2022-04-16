import React from "react";
import { useNavigate } from "react-router-dom";
import "./Food.css";

const Food = ({ food }) => {
	const navigate = useNavigate();
	const { name, image, price, description } = food;

	const handleFoodNagigate = food => {
		navigate(`/details/${food.id}`);
	};

	return (
		<div className='col' onClick={() => handleFoodNagigate(food)}>
			<div className='card h-100 border-0 text-center'>
				<img src={image} className='card-img-top m-auto' alt='...' />
				<div className='card-body'>
					<p className='card-title'>{name}</p>
					<small className='card-text'>{description.slice(0, 50)}</small>
					<h5 className='text-danger mt-2'>${price}</h5>
				</div>
			</div>
		</div>
	);
};

export default Food;
