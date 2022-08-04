import { Routes, Route } from "react-router-dom";
import React from "react";
import "./route.css";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

function AllRoutes() {
	return (
		<div className="main-body">
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default AllRoutes;
