import React from "react";

const Review = ({ review }) => {
	const { title, description, image, icon } = review;

	return (
		<div className='col'>
			<div className='card border-0'>
				<img
					src={image}
					className='card-img-top mx-auto w-100 pt-0'
					alt='...'
				/>
				<div className='card-body'>
					<div className='row'>
						<div className='col-md-4'>
							<img src={icon} alt='' height='70' width='50' />
						</div>
						<div className='col-md-8'>
							<p>{title}</p>
							<small className='card-text'>{description}</small>
							<br />
							<p className='pt-3 text-success'>Show More</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
