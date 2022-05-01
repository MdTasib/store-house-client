import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

const Inventory = () => {
	const [products, setProducts] = useProducts([]);
	const [quantity, setQuantity] = useState(0);
	const { id } = useParams();

	const product = products.find(product => product._id === id);

	const handleUpdateQuantity = id => {
		const updateProduct = { ...product };
		let productQuantity = updateProduct.quantity;
		setQuantity(productQuantity);
		setQuantity(quantity - 1);
		console.log(quantity);

		// fetch(`http://localhost:4000/note/${id}`, {
		// 	method: "PUT",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({}),
		// })
	};

	return (
		<div className='container py-5'>
			<div className='text-center'>
				<h3 className='fw-bold'>
					Do you want to update the product stock quantity?
				</h3>
			</div>
			<div className='row'>
				<div className='col-md-6'>
					<img src={product?.imageUrl} className='w-75' alt='' />
					<h3>{product?.name}</h3>
					<small className='pb-2 d-block'>{product?.description}</small>
					<p className='m-0'>
						<b>Supplier</b> : {product?.supplier}
					</p>
					<p className='m-0'>
						<b>Price</b> : {product?.price}
					</p>
					<p>
						<b>Quantity</b> : {product?.quantity}
					</p>
					<button
						onClick={() => handleUpdateQuantity(product?._id)}
						className='btn btn-dark'>
						Delivered
					</button>
				</div>
				<div className='col-md-6'></div>
			</div>
		</div>
	);
};

export default Inventory;
