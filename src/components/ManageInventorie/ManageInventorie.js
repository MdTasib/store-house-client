import React from "react";
import useProducts from "../../Hooks/useProducts";

const ManageInventorie = () => {
	const [products, setProducts] = useProducts([]);

	return (
		<div>
			<h4>ManageInventorie</h4>

			<table className='table table-dark table-striped mb-0'>
				<thead>
					<tr>
						<th scope='col'>Name</th>
						<th scope='col'>Description</th>
						<th scope='col'>Price</th>
						<th scope='col'>Quantity</th>
						<th scope='col'>Id</th>
						<th scope='col'>Supplier</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						{products.map(product => {
							console.log(product);
							<></>;
						})}
					</tr>
				</tbody>
			</table>
		</div>
	);
};

function Td({ product }) {
	return (
		<>
			<td>{product?.name}</td>
			<td>{product?.description}</td>
			<td>{product?.price}</td>
			<td>{product?.quantity}</td>
			<td>{product?._id}</td>
			<td>{product?.supplier}</td>
		</>
	);
}

export default ManageInventorie;
