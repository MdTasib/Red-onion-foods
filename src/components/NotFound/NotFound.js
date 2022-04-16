import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/extra/404.gif";

const NotFound = () => {
	return (
		<div className='container text-center'>
			<img src={notFound} alt='' />
			<div className='pb-5'>
				<Link to='/' className='text-decoration-none text-white btn btn-danger'>
					GO TO HOME
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
