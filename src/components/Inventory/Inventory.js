import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

const Inventory = () => {
	const { id } = useParams();
	const [products, setProducts] = useProducts();
	const navigate = useNavigate();

	const product = products?.find(product => product._id === id);
	let [quantity, setQuantity] = useState(Number(product?.quantity));

	useEffect(() => {
		setQuantity(Number(product?.quantity));
	}, [product]);

	const handleUpdateQuantity = () => {
		setQuantity(prev => prev - 1);
	};

	const handleUpdateQuantityOnForm = event => {
		event.preventDefault();
		const quantityInput = event.target.quantityValue.value;
		const newQuantity = Number(quantityInput) + quantity;
		setQuantity(newQuantity);
	};

	useEffect(() => {
		if (isNaN(quantity)) {
			setTimeout(() => {
				console.log("hello");
			}, 1500);
		} else {
			fetch(`http://localhost:5000/product/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ quantity }),
			});
		}
	}, [id, quantity]);

	console.log(quantity || 0);

	const handleManegeInventory = () => {
		navigate("/manageInventorie");
	};

	return (
		<div className='container py-5'>
			<div className='text-center'>
				<h3 className='fw-bold'>
					Do you want to update the product stock quantity?
				</h3>
			</div>
			<div className='row align-items-center'>
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
						<b>Quantity</b> : {quantity}
					</p>
					<button
						onClick={() => handleUpdateQuantity(product?._id)}
						className='btn btn-dark'>
						Delivered
					</button>
				</div>
				<div className='col-md-6'>
					<h3 className='fw-bold'>Increase Your Product Stock Quantity</h3>
					<form onSubmit={handleUpdateQuantityOnForm} className='d-flex mt-4'>
						<input
							className='form-control'
							type='search'
							placeholder='Product Quantity'
							name='quantityValue'
							aria-label='Search'
						/>
						<button className='btn btn-dark' type='submit'>
							UPDATE
						</button>
					</form>
					<div className='mt-4'>
						<button onClick={handleManegeInventory} className='btn btn-dark'>
							Go To Manage Inventories
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Inventory;
