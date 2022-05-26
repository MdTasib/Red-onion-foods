import React, { useContext } from "react";
import { CartContext } from "../../App";

const CheckOut = () => {
	const [cart, setCart] = useContext(CartContext);

	let price = 0;
	cart.forEach(food => {
		price += food.price;
	});

	let tax = Number(price) / 10;
	let deliveryFee = Number(price) / 20;
	let total = Number(price) + tax + deliveryFee;

	return (
		<div className='container row justify-content-between'>
			<div className='col-md-6'>
				<div className='p-5'>
					<div className='container'>
						<h4 className='border-bottom border-2 pb-2'>
							Edit Delivery Details
						</h4>
						<form className=''>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Delivery Type'
							/>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Rood No'
							/>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Flat, suite and floor'
							/>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Business Name'
							/>
							<input
								type='text'
								className='form-control my-3'
								placeholder='Add Delivery Instructor'
							/>
							<input
								type='submit'
								className='form-control btn btn-danger'
								value='Save & Continue'
							/>
						</form>
					</div>
				</div>
			</div>
			<div className='col-md-6 pt-5'>
				<h3 className='text-danger'>Select Your Foods - {cart.length}</h3>
				{cart.map(food => (
					<div
						key={food.id}
						className='row align-items-center py-2 my-2 bg-light rounded-pill'>
						<div className='col-md-4'>
							<img src={food?.image} width='100' height='' alt='' />
						</div>
						<div className='col-md-8'>
							<p className='fw-bold m-0'>{food?.name}</p>
							<p className='fw-bold text-danger m-0'>${food.price}</p>
							<small className='text-secondary text-uppercase'>
								{food.category}
							</small>
						</div>
					</div>
				))}
				<div className='row justify-content-between align-items-center py-2 my-2 bg-light rounded'>
					<div className='col-md-6'>
						<p className='m-0'>Price</p>
						<p className='m-0'>Tax</p>
						<p className='m-0'>Delivery Fee</p>
						<p className='m-0'>Total</p>
					</div>
					<div className='col-md-6'>
						<p className='m-0'>$ {price}</p>
						<p className='m-0'>$ {tax}</p>
						<p className='m-0'>$ {deliveryFee}</p>
						<p className='m-0'>$ {total}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
