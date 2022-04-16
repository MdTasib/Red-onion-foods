import { useEffect, useState } from "react";

const useFood = () => {
	const [foods, setFoods] = useState([]);

	// useEffect(() => {
	// 	fetch("data.json")
	// 		.then(response => response.json())
	// 		.then(data => setFoods(data));
	// }, []);

	useEffect(() => {
		(async () => {
			const res = await fetch("data.json");
			const data = await res.json();
			setFoods(data);
		})();
	}, []);

	return [foods, setFoods];
};

export default useFood;
