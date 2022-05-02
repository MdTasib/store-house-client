import React, { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProducts";
import removeIcon from "../../assets/icon/remove.png";
import "./ManageInventorie.css";
import toast from "react-hot-toast";

const ManageInventorie = () => {
	const [pageReload, setPageReload] = useState(false);
	const [products, setProducts] = useProducts(pageReload);

	const reduceProduct = (product, index) => {
		return (
			<tr key={product._id}>
				<td>{product.name}</td>
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
			fetch(`http://localhost:5000/product/${id}`, {
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

	return (
		<div>
			<h4 className='py-5 m-0 text-center fw-bold bg-dark text-white'>
				Manage Inventory Products
			</h4>
			<table className='table table-dark table-hover mb-0'>
				<thead>
					<tr>
						<th scope='col'>Name</th>
						<th scope='col'>Price</th>
						<th scope='col'>Quantity</th>
						<th scope='col'>Supplier</th>
						<th scope='col'>DELETE</th>
					</tr>
				</thead>
				<tbody>{products.map(reduceProduct)}</tbody>
			</table>
		</div>
	);
};

export default ManageInventorie;
