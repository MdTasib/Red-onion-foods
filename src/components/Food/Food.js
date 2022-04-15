import React from "react";
import "./Food.css";

const Food = ({ food }) => {
	const { name, image, price, description } = food;

	return (
		<div className='col'>
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
