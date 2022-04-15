import { useEffect, useState } from "react";

const useFood = () => {
	const [foods, setFoods] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then(response => response.json())
			.then(data => setFoods(data));
	}, []);

	return [foods, setFoods];
};

export default useFood;
