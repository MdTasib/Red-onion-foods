import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className='text-center header'>
			<h2>BEST FOODS WAITING FOR YOUR BELLY</h2>
			<form className='d-flex w-25 mx-auto'>
				<input
					className='form-control me-2'
					type='search'
					placeholder='Search'
					aria-label='Search'
				/>
				<button className='btn btn-danger' type='submit'>
					Search
				</button>
			</form>
		</div>
	);
};

export default Header;
