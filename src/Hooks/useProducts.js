import { useEffect, useState } from "react";

const useProducts = pageReload => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`https://fast-savannah-73307.herokuapp.com/products`)
			.then(res => res.json())
			.then(data => setProducts(data));
	}, [pageReload]);

	return [products, setProducts];
};

export default useProducts;
