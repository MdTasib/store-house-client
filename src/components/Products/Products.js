import React from "react";
import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
	const [products, setProducts] = useProducts([]);
	console.log(products);

	return (
		<div className='bg-light'>
			<div className='container py-4'>
				<div className='py-4 text-center'>
					<h2 className='fw-bold'>STORED PRODUCTS</h2>
				</div>
				<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center g-4'>
					{products.map(item => (
						<Product key={item._id} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
