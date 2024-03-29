import React from "react";
import "./Clients.css";

const Clients = () => {
	const reviews = [
		{
			id: 1,
			count: 75,
			name: "Categories",
			duration: 1000,
		},
		{
			id: 2,
			count: "255+",
			name: "Products",
			duration: 1500,
		},
		{
			id: 3,
			count: 320,
			name: "Customers",
			duration: 2000,
		},
		{
			id: 4,
			count: "55+",
			name: "Orders",
			duration: 2500,
		},
	];

	return (
		<div className='clients'>
			<div className='container py-5'>
				<div className='overlay'></div>
				<div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center g-4'>
					{reviews.map(item => (
						<div
							key={item.id}
							data-aos='fade-right'
							data-aos-duration={item.duration}
							className='text-center clients-info text-white'>
							<h2 className='m-0 fw-bold'>{item.count}</h2>
							<small>{item.name}</small>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Clients;
