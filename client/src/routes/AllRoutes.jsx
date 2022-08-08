import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./route.css";
import ShimmerEffect from "../components/common/ShimmerEffect";
const Home = lazy(() => import("../pages/Home"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Foods = lazy(() => import("../pages/Foods"));
const Cart = lazy(() => import("../pages/Cart"));
const Contact = lazy(() => import("../pages/Contact"));

function AllRoutes() {
	return (
		<div className="main-body">
			<Suspense
				fallback={
					<div>
						<ShimmerEffect />
					</div>
				}
			>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/foods" exact element={<Foods />} />
					<Route path="/cart" exact element={<Cart />} />
					<Route path="/contact" exact element={<Contact />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default AllRoutes;
