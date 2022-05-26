import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Singup from "./components/Singup/Singup";
import Login from "./components/Login/Login";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import NotFound from "./components/NotFound/NotFound";
import CheckOut from "./components/CheckOut/CheckOut";
import { createContext, useState } from "react";
import Cart from "./components/Cart/Cart";

export const CartContext = createContext();

function App() {
	const [cart, setCart] = useState([]);

	return (
		<>
			<CartContext.Provider value={[cart, setCart]}>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/details/:id' element={<FoodDetails />} />
					<Route path='/checkout/:id' element={<CheckOut />} />
					<Route path='/login' element={<Login />} />
					<Route path='/singup' element={<Singup />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</CartContext.Provider>
		</>
	);
}

export default App;
