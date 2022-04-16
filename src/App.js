import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Singup from "./components/Singup/Singup";
import Login from "./components/Login/Login";
import FoodDetails from "./components/FoodDetails/FoodDetails";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/details/:id' element={<FoodDetails />} />
				<Route path='/login' element={<Login />} />
				<Route path='/singup' element={<Singup />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
