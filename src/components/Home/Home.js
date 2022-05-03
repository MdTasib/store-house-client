import React from "react";
import Contact from "../Contact/Contact";
import FQA from "../FQA/FQA";
import Header from "../Header/Header";
import Products from "../Products/Products";

const Home = () => {
	return (
		<>
			<Header />
			<Products />
			<FQA />
			<Contact />
		</>
	);
};

export default Home;
