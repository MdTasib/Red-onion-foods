import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Singup from "./components/Singup/Singup";
import Login from "./components/Login/Login";
import Breakfast from "./components/Breakfast/Breakfast";
import Dinner from "./components/Dinner/Dinner";
import Lunch from "./components/Lunch/Lunch";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				{/* <Route path='/breakfast' element={<Breakfast />} />
				<Route path='/dinner' element={<Dinner />} />
				<Route path='/lunch' element={<Lunch />} /> */}
				<Route path='/login' element={<Login />} />
				<Route path='/singup' element={<Singup />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
