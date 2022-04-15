import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import useFood from "../../Hooks/useFood";
import Breakfast from "../Breakfast/Breakfast";
import CustomLink from "../CustomLink/CustomLink";
import Dinner from "../Dinner/Dinner";
import Food from "../Food/Food";
import Lunch from "../Lunch/Lunch";

const FoodContainer = () => {
	const [foods, setFoods] = useFood();
	const [loadFoods, setLoodFoos] = useState([]);

	const handleBreakfast = () => {
		onLoadFood("breakfast");
	};

	const handleDinner = () => {
		onLoadFood("dinner");
	};

	const handleLunch = () => {
		onLoadFood("lunch");
	};

	const onLoadFood = category => {
		const filterFood = foods.filter(food => food.category === category);
		setLoodFoos(filterFood);
	};

	return (
		<>
			<div className='py-4 '>
				<nav className='navbar navbar-expand-lg navbar-light'>
					<div className='container'>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNav'
							aria-controls='navbarNav'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div className='collapse navbar-collapse' id='navbarNav'>
							<ul className='navbar-nav mx-auto'>
								<li className='nav-item mx-3'>
									<button onClick={handleBreakfast} className='btn btn-primary'>
										Breakfast
									</button>
								</li>
								<li className='nav-item mx-3'>
									<button
										onClick={handleDinner}
										className='btn btn-primary mx-3'>
										Dinner
									</button>
								</li>
								<li className='nav-item'>
									<button onClick={handleLunch} className='btn btn-primary'>
										Lunch
									</button>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>

			<div className='container py-4'>
				<div className='row row-cols-1 row-cols-md-3 g-4'>
					{loadFoods.map(food => (
						<Food key={food.id} food={food} />
					))}
				</div>
			</div>
		</>
	);
};

export default FoodContainer;
