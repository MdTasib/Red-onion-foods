import React from "react";
import Review from "../Review/Review";
import review1 from "../../images/extra/review1.png";
import review2 from "../../images/extra/review2.png";
import review3 from "../../images/extra/review3.png";
import icon1 from "../../images/icons/icon1.png";
import icon2 from "../../images/icons/icon2.png";
import icon3 from "../../images/icons/icon3.png";

const ReviewContainer = () => {
	const reviews = [
		{
			id: 1,
			title: "Best value",
			description:
				"Slash 10% off the price of those big orders with our exclusive discount for corporate customers.",
			image: review1,
			icon: icon1,
		},
		{
			id: 2,
			title: "Dedicated account manager",
			description:
				"Get the personal touch. Throw your dedicated AM any tech related challenges – or hit them up for hot restaurant tips.",
			image: review2,
			icon: icon2,
		},
		{
			id: 3,
			title: "1 place for complete control",
			description:
				"From individual allowances to e-gift vouchers to catering and ordering pantry supplies, it’s all here.",
			image: review3,
			icon: icon3,
		},
	];
	return (
		<div className='container py-4'>
			<div className='py-2 w-50'>
				<h4 className='fw-bold'>Why you choose us</h4>
				<small>
					Order lunch or fuel for work-from-home, late nights in the office,
					corporate events, client meetings, and much more.
				</small>
			</div>

			<div className='row row-cols-1 row-cols-md-3 g-4 py-3'>
				{reviews.map(review => (
					<Review key={review.id} review={review} />
				))}
			</div>
		</div>
	);
};

export default ReviewContainer;
