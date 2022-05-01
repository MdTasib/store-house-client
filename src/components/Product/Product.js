import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ item }) => {
	const { _id, imageUrl, name, description, price, supplier, quantity } = item;
	const navigate = useNavigate();

	const handleUpdate = id => {
		navigate(`/inventory/${id}`);
	};
	return (
		<div className='col'>
			<div className='card border-0 h-100'>
				<img src={imageUrl} className='card-img-top w-75 mx-auto' alt='...' />
				<div className='card-body'>
					<h5 className='card-title'>{name}</h5>
					<small className='card-text'>{description.slice(0, 100)}</small>
					<p className='card-text my-1'>
						<b>Supplier</b> : {supplier}
					</p>
					<p className='card-text m-0'>
						<b>Quantity</b> : {quantity}
					</p>
					<div className='row align-items-center mt-2'>
						<div className='col-md-6'>
							<h4 className='card-text'>${price}</h4>
						</div>
						<div className='col-md-6'>
							<button
								onClick={() => handleUpdate(_id)}
								className='btn btn-warning text-white'>
								UPDATE
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
