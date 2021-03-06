import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../App";
import useSelectedFood from "../../Hooks/useSelectedFood";
import cartIcon from "../../images/icons/cart.png";

const FoodDetails = () => {
	const { id } = useParams();
	const [selectedFood, setSelectedFood] = useSelectedFood(id);
	const navigate = useNavigate();
	const [cart, setCart] = useContext(CartContext);

	const newCart = [...cart, selectedFood];
	const handleCheckout = id => {
		navigate(`/checkout/${id}`);
		setCart(newCart);
	};

	return (
		<div className='container py-5'>
			<div className='row align-items-center'>
				<div className='col-md-6'>
					<h2>{selectedFood?.name}</h2>
					<small>{selectedFood?.description}</small>
					<h4 className='pt-3'>$ {selectedFood?.price}</h4>
					<button
						onClick={() => handleCheckout(selectedFood?.id)}
						className='btn btn-outline-danger'>
						<img src={cartIcon} width='30' alt='' /> ADD
					</button>
				</div>
				<div className='col-md-6 text-end'>
					<img src={selectedFood?.image} className='w-75' alt='' />
				</div>
			</div>
		</div>
	);
};

export default FoodDetails;
