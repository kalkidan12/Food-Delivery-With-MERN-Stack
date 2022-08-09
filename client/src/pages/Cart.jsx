import React from "react";
import "./pages.css";

function Cart() {
	return (
		<>
			<div className="container">
				<div className="container  bg-light text-center mb-5 p-2">
					<h1 className="cart-title m-2">Shopping Cart</h1>
					<h1 className="cart-title m-2 text-danger">Shop</h1>
				</div>
				<div className="row">
					<div className="col-md-9 col-sm-12 text-center">
						<div className="row mb-5 text-muted">
							<div className="col-md-4 col-sm-12">
								<div className="row">
									<div className="col-md-6 col-sm-12 mb-3">productImage</div>{" "}
									<div className="col-md-6 col-sm-12 mb-3">+ Product Name</div>
								</div>
							</div>
							<div className="col-md-2 col-sm-12 mb-3">price</div>
							<div className="col-md-2 col-sm-12 mb-3">- Quantity +</div>
							<div className="col-md-2 col-sm-12 mb-3">total</div>
							<div className="col-md-2 col-sm-12 mb-3">X</div>
						</div>
						{/* <div className="row mb-5">
							<div className="col-4">productImage + Product Name</div>
							<div className="col-2">price</div>
							<div className="col-2">- Quantity +</div>
							<div className="col-2">total</div>
							<div className="col-2">X</div>
						</div>
						<div className="row mb-5">
							<div className="col-4">productImage + Product Name</div>
							<div className="col-2">price</div>
							<div className="col-2">- Quantity +</div>
							<div className="col-2">total</div>
							<div className="col-2">X</div>
						</div> */}
					</div>
					<div className="col-md-3 col-sm-12 card bg-light p-5 mb-5">
						<div className="col-12 shadow-sm p-2 mb-2 mt-1 text-center">
							Cart Total
						</div>
						<div className="row m-2">
							<div className="col-6">Sub Total:</div>
							<div className="col-6 float-end">$52435</div>
						</div>
						<div className="row m-2">
							<div className="col-12">
								<div className="col-12 text-start mb-2">Payment:</div>

								<select
									class=" col-12 m-1 form-select"
									aria-label="Default select example"
								>
									<option selected>Selct Payment Method</option>
									<option value="1">On Delivery</option>
									<option value="2">Telebirr</option>
								</select>
							</div>
							<div className="col-6"></div>
						</div>
						<div className="row m-2">
							<div className="col-6">Total:</div>
							<div className="col-6 float-end">$52435</div>
						</div>
						<div className="col-12  shadow-sm p-2 mb-2 mt-1 text-center">
							<button className="btn btn-outline-danger">
								PROCEED TO CHECKOUT
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Cart;
