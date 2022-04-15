import React from "react";
import FoodContainer from "../FoodContainer/FoodContainer";
import Header from "../Header/Header";
import ReviewContainer from "../ReviewContainer/ReviewContainer";

const Home = () => {
	return (
		<>
			<Header />
			<FoodContainer />
			<ReviewContainer />
		</>
	);
};

export default Home;
