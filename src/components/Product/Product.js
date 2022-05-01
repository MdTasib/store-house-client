import React from "react";

const Product = ({ item }) => {
	const { imageUrl, name, description, price, supplier } = item;
	return (
		<div className='col'>
			<div className='card h-100'>
				<img src={imageUrl} className='card-img-top' alt='...' />
				<div className='card-body'>
					<h5 className='card-title'>{name}</h5>
					<p className='card-text'>{description.slice(0, 100)}</p>
					<p className='card-text'>{supplier}</p>
					<div className='row align-items-center'>
						<div className='col-md-6'>
							<h4 className='card-text'>${price}</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
