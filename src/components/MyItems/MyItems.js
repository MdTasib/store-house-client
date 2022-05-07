import React, { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProducts";
import removeIcon from "../../assets/icon/remove.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
	const [pageReload, setPageReload] = useState(false);
	const [products, setProducts] = useState([]);
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	const [isReload, setIsReload] = useState(false);

	useEffect(() => {
		const url = `https://fast-savannah-73307.herokuapp.com/productByEmail?email=${user?.email}`;
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setProducts(data);
				setIsReload(!isReload);
			});
	}, [user?.email, isReload]);

	const reduceProduct = (product, index) => {
		return (
			<tr key={product._id}>
				<td>{product.name}</td>
				<td>{product.email}</td>
				<td>{product.price}</td>
				<td>{product.quantity}</td>
				<td>{product.supplier}</td>
				<td>
					<img
						onClick={() => handleDelete(product._id)}
						className='delete'
						src={removeIcon}
						width={30}
						alt=''
					/>
				</td>
			</tr>
		);
	};

	const handleDelete = id => {
		const confirm = window.confirm("Are you sure delete this item ?");
		if (confirm) {
			fetch(`https://fast-savannah-73307.herokuapp.com/product/${id}`, {
				method: "DELETE",
				headers: { "content-type": "application/json" },
			})
				.then(res => res.json())
				.then(data => {
					toast.success("DELETE Product Successfully");
					setPageReload(!pageReload);
				});
		}
	};

	const handleNavigate = () => {
		navigate("/addItem");
	};

	return (
		<>
			{products.length === 0 ? (
				<div
					style={{ height: "50vh" }}
					className='p-5 d-flex align-items-center justify-content-center'>
					<h3>Product Not Found</h3>
				</div>
			) : (
				<div>
					<h4 className='py-5 m-0 text-center fw-bold bg-dark text-white'>
						Your All Products
					</h4>
					<table className='table table-dark table-hover mb-0'>
						<thead>
							<tr>
								<th scope='col'>Name</th>
								<th scope='col'>Email</th>
								<th scope='col'>Price</th>
								<th scope='col'>Quantity</th>
								<th scope='col'>Supplier</th>
								<th scope='col'>DELETE</th>
							</tr>
						</thead>
						<tbody>{products.map(reduceProduct)}</tbody>
					</table>
					<div className='text-center py-5 bg-dark'>
						<button onClick={handleNavigate} className='btn btn-light fw-bold'>
							ADD NEW ITEM
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default MyItems;
