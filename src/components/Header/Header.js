import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className='text-center header'>
			<div className='container'>
				<h2>BEST FOODS WAITING FOR YOUR BELLY</h2>
				<form className='d-flex w-50 mx-auto'>
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
		</div>
	);
};

export default Header;
