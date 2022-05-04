import React from "react";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import FQA from "../FQA/FQA";
import Header from "../Header/Header";
import Products from "../Products/Products";

const Home = () => {
	return (
		<>
			<Header />
			<Products />
			<Clients />
			<FQA />
			<Contact />
		</>
	);
};

export default Home;
