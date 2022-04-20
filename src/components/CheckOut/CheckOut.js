import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFood from "../../Hooks/useFood";

const CheckOut = () => {
	const { id } = useParams();
	const [foods, setFoods] = useFood();
	const [selectedFood, setSelectedFood] = useState({});

	useEffect(() => {
		const detailsFood = foods.find(food => food.id == id);
		setSelectedFood(detailsFood);
	}, [id, foods]);

	return (
		<div className='container row'>
			<div className='col-md-6'>
				<div className='p-5'>
					<div className='container'>
						<h4 className='border-bottom border-2 pb-2'>
							Edit Delivery Details
						</h4>
						<form className=''>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Delivery Type'
							/>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Rood No'
							/>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Flat, suite and floor'
							/>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Business Name'
							/>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Add Delivery Instructor'
							/>
							<input
								type='submit'
								className='form-control btn btn-danger'
								value='Save & Continue'
							/>
						</form>
					</div>
				</div>
			</div>
			<div className='col-md-6'></div>
		</div>
	);
};

export default CheckOut;
