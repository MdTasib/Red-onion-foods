import React from "react";
import { useParams } from "react-router-dom";
import useSelectedFood from "../../Hooks/useSelectedFood";
import deleteIcon from "../../images/icons/delete.png";

const CheckOut = () => {
	const { id } = useParams();
	const [selectedFood, setSelectedFood] = useSelectedFood(id);

	return (
		<div className='container row'>
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
			<div className='col-md-6'>
				<div className='d-flex justify-content-between py-2'>
					<img src={selectedFood?.img} width='30' height='30' alt='' />
					<small className='fw-bold ms-3'>{selectedFood?.name}</small>
					<img className='' src={deleteIcon} width='30' height='30' alt='' />
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
