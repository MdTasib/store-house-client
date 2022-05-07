import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
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
		if (quantity === 0) {
			toast.error("Products are not in stock");
		} else {
			setQuantity(prev => prev - 1);
		}
	};

	const handleUpdateQuantityOnForm = event => {
		event.preventDefault();
		const quantityInput = event.target.quantityValue.value;
		const newQuantity = Number(quantityInput) + quantity;
		setQuantity(newQuantity);
		event.target.reset();
	};

	useEffect(() => {
		if (isNaN(quantity)) {
			setTimeout(() => {}, 1500);
		} else {
			fetch(`https://fast-savannah-73307.herokuapp.com/product/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ quantity }),
			});
		}
	}, [id, quantity]);

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
			{products.length === 0 ? (
				<div
					style={{ height: "50vh" }}
					className='p-5 d-flex align-items-center justify-content-center'>
					<div className='spinner-border' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				</div>
			) : (
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
							<b>Quantity</b> :{" "}
							{quantity <= 0 ? (
								<b className='text-danger fw-bold'>SOLD</b>
							) : (
								quantity
							)}
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
			)}
		</div>
	);
};

export default Inventory;
