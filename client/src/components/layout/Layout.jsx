import React from "react";
import AllRoutes from "../../routes/AllRoutes";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout() {
	return (
		<>
			<Footer />
			<Header />
			<div>
				<AllRoutes />
			</div>
		</>
	);
}

export default Layout;
