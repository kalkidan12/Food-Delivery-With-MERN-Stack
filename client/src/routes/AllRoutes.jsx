import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";

function AllRoutes() {
	return (
		<>
			<Routes>
				<Route path="/" exact element={<Home />} />
			</Routes>
		</>
	);
}

export default AllRoutes;
