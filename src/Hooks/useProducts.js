import { useEffect, useState } from "react";

const useProducts = pageReload => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/products`)
			.then(res => res.json())
			.then(data => setProducts(data));
	}, [pageReload]);

	return [products, setProducts];
};

export default useProducts;
