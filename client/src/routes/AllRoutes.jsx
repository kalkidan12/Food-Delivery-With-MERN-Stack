import { Routes, Route } from "react-router-dom";
import React from "react";
import "./route.css";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Foods from "../pages/Foods";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";

function AllRoutes() {
	return (
		<div className="main-body">
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/foods" exact element={<Foods />} />
				<Route path="/cart" exact element={<Cart />} />
				<Route path="/contact" exact element={<Contact />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default AllRoutes;
