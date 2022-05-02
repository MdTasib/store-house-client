import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
	const [products, setProducts] = useProducts([]);
	const navigate = useNavigate();

	const handleManegeInventory = () => {
		navigate("/manageInventorie");
	};

	return (
		<div className='bg-light'>
			<div className='container py-4'>
				<div className='py-4 text-center'>
					<h2 className='fw-bold'>STORED PRODUCTS</h2>
				</div>
				<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center g-4'>
					{products.slice(0, 6).map(item => (
						<Product key={item._id} item={item} />
					))}
				</div>
				<div className='text-center mt-4'>
					<button onClick={handleManegeInventory} className='btn btn-dark'>
						Manage Inventories
					</button>
				</div>
			</div>
		</div>
	);
};

export default Products;
