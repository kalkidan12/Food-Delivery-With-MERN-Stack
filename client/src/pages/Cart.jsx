import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCartX } from "react-icons/bs";

import "./pages.css";
import { useDispatch, useSelector } from "react-redux";

import {
	addToCart,
	clearCart,
	decreaseCart,
	getTotals,
	removeFromCart,
} from "../features/slices/CartSlice";

function Cart() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTotals());
	}, [cart, dispatch]);

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};
	const handleDecreaseCart = (product) => {
		dispatch(decreaseCart(product));
	};
	const handleRemoveFromCart = (product) => {
		dispatch(removeFromCart(product));
	};
	const handleClearCart = () => {
		dispatch(clearCart());
	};
	return (
		<>
			<div className="container">
				<div className="container  bg-light text-center mb-5 p-2">
					<h1 className="cart-title m-2">Shopping Cart</h1>
					<h1 className="cart-title m-2 text-danger">Shop</h1>
				</div>
				<div className="row">
					{cart.cartItems.length === 0 ? (
						<div className="text-center">
							<div
								className="col-12 w-100 d-flex align-items-center justify-content-center mb-3"
								style={{ fontSize: "80px", color: "grey" }}
							>
								<BsCartX />
							</div>
							<h1>Your Cart Is Empty</h1>
							<Link to="/foods">
								<button className="btn btn-secondary mb-5 mt-2">
									Start Shopping
								</button>
							</Link>
						</div>
					) : (
						<>
							<div className="col-md-9 col-sm-12 text-center">
								<div className="row mb-5 text-muted">
									<div className="col-md-4 col-sm-12">
										<div className="row">
											<div className="col-md-6 col-sm-12 mb-3">Image</div>{" "}
											<div className="col-md-6 col-sm-12 mb-3">Name</div>
										</div>
									</div>
									<div className="col-md-2 col-sm-12 mb-3">price</div>
									<div className="col-md-2 col-sm-12 mb-3">Quantity</div>
									<div className="col-md-2 col-sm-12 mb-3">total</div>
									<div className="col-md-2 col-sm-12 mb-3">Remove</div>
								</div>
								{cart.cartItems &&
									cart.cartItems.map((cartItem) => (
										<div className="row mb-5 text-muted" key={cartItem.id}>
											<div className="col-md-4 col-sm-12">
												<div className="row">
													<div className="col-md-6 col-sm-12 mb-3">
														<img src={cartItem.img} alt={cartItem.title} />
													</div>{" "}
													<div className="col-md-6 col-sm-12 mb-3">
														{cartItem.title}
													</div>
												</div>
											</div>
											<div className="col-md-2 col-sm-12 mb-3">
												{cartItem.price} Br
											</div>
											<div className="col-md-2 col-sm-12 mb-3">
												<div className="row">
													<button
														className="col-3"
														onClick={() => handleDecreaseCart(cartItem)}
													>
														-
													</button>
													<div className="col-4">{cartItem.cartQuantity}</div>
													<button
														className="col-3"
														onClick={() => handleAddToCart(cartItem)}
													>
														+
													</button>
												</div>
											</div>
											<div className="col-md-2 col-sm-12 mb-3">
												{cartItem.price * cartItem.cartQuantity} Br
											</div>
											<div className="col-md-2 col-sm-12 mb-3">
												<button onClick={() => handleRemoveFromCart(cartItem)}>
													X
												</button>
											</div>
										</div>
									))}
								<div className="row mb-5 text-muted">
									<div className="col-md-4 col-sm-12">
										<div className="row">
											<div className="col-md-6 col-sm-12 mb-3"></div>{" "}
											<div className="col-md-6 col-sm-12 mb-3"></div>
										</div>
									</div>
									<div className="col-md-2 col-sm-12 mb-3"></div>
									<div className="col-md-2 col-sm-12 mb-3"></div>
									<div className="col-md-2 col-sm-12 mb-3"></div>
									<div className="col-md-2 col-sm-12 mb-3">
										<button
											className="btn btn-danger p-1"
											onClick={() => handleClearCart()}
										>
											Clear Cart
										</button>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-12 col-sm-12 bg-light pt-2 mb-5">
								<div className="col-12 card mb-3">
									<div className="col-12 shadow-sm p-2 mb-2 mt-1 text-center">
										Cart Total
									</div>
									<div className="row m-2">
										<div className="col-6">Sub Total:</div>
										<div className="col-6 float-end">
											{cart.cartTotalAmount} Br
										</div>
									</div>
									<div className="row m-2">
										<div className="col-12">
											<div className="col-12 text-start mb-2">Payment:</div>

											<select
												className=" col-12 m-1 form-select"
												aria-label="Default select example"
											>
												<option defaultChecked>On Delivery</option>
												<option value="2">Telebirr</option>
											</select>
										</div>
										<div className="col-6"></div>
									</div>
									<div className="row m-2">
										<div className="col-6">Total:</div>
										<div className="col-6 float-end">
											{cart.cartTotalAmount} Br
										</div>
									</div>
									<div className="col-12  shadow-sm p-2 mb-2 mt-1 text-center">
										<button className="btn btn-outline-danger">
											PROCEED TO CHECKOUT
										</button>
									</div>
								</div>
								<div className="col-12">
									<Link to="/foods" className="row bg-warning">
										<span className="col-12 p-1 text-center">
											Continue Shopping
										</span>
										{/* <i className="col-1 p-2  ">
											<BiArrowBack />
										</i> */}
									</Link>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default Cart;
