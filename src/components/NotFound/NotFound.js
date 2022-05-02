import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../../assets/images/notFound.gif";

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div>
			<img src={notFound} className='w-100' style={{ height: "80vh" }} alt='' />
			<div className='text-center bg-black'>
				<button
					onClick={() => navigate("/")}
					className='btn btn-outline-dark text-white'>
					GO TO HOME
				</button>
			</div>
		</div>
	);
};

export default NotFound;
