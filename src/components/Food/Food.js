import React from "react";

const Food = ({ food }) => {
	const { name, image, price, description, category } = food;

	return (
		<div className='col'>
			<div className='card h-100'>
				<img src={image} className='card-img-top' alt='...' />
				<div className='card-body'>
					<h5 className='card-title'>{name}</h5>
					<p>{category}</p>
					{/* <p className='card-text'>{description}</p> */}
				</div>
			</div>
		</div>
	);
};

export default Food;
