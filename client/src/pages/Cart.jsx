import React, { useEffect, useState } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import "./cart.css";
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {
	addToCart,
	decreaseCart,
	removeFromCart,
	getTotals,
	clearCart,
} from "../features/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AcceptPayment } from "../features/slices/paymentSlice";

function Cart() {
	const navigate = useNavigate();
	const cart = useSelector((state) => state.cart);
	const { chekout_link } = useSelector((state) => state.payment);
	const dispatch = useDispatch();

	const currentUser = localStorage.getItem("food-user");
	const [data, setData] = useState([]);
	const [payNow, setPayNow] = useState(false);
	console.log(payNow);

	useEffect(() => {
		if (currentUser && cart) {
			const { first_name, last_name, email } = currentUser;
			const { cartTotalAmount } = cart;
			setData({
				currency: "ETB",
				amount: cartTotalAmount,
				first_name: first_name,
				last_name: last_name,
				email: email,
			});
		}
		dispatch(getTotals());
	}, [cart, dispatch]);
	const cartItem = JSON.parse(localStorage.getItem("cartItems"));

	const MakePayment = async () => {
		dispatch(AcceptPayment(data));
	};
	const toast = useToast();

	const unSignedUserHandler = () => {
		toast({
			title: "Please SignIn First!",
			status: "warning",
			duration: 5000,
			isClosable: true,
			position: "bottom",
		});
		navigate("/auth");
	};

	return (
		<>
			<div className="cart-title">
				<h2>Your Cart</h2>
			</div>
			<div className="container">
				{cartItem.length > 0 ? (
					<div>
						<div className="check-out">
							<div className="title">Your Bill</div>
							<div className="sub-total">
								<p>Sub Total</p>
								<p>${cart.cartTotalAmount}</p>
							</div>
							<div className="select">
								<p>Select Payment</p>
								<select type="option" onChange={() => setPayNow(!payNow)}>
									<option value="On Delivery">On Delivery</option>
									<option value="Tele Birr">Pay Now</option>
								</select>
							</div>
							<div className="sub-total">
								<p>Total</p>
								<p>${cart.cartTotalAmount}</p>
							</div>
							<div className="button">
								<button
									onClick={
										currentUser
											? payNow
												? MakePayment
												: () => {}
											: unSignedUserHandler
									}
								>
									Proceed Check Out
								</button>
							</div>
						</div>
						<Link to="/" className="continue-shopping">
							<h3>
								<span>
									<GiShoppingBag />
								</span>
								Continue Shopping
							</h3>
						</Link>
						{cartItem.map((item) => (
							<div key={item.id}>
								<ul className="cart-item-display">
									<li>
										<img
											src={item.img}
											alt="food-image"
											width={70}
											height={70}
										/>
									</li>
									<li>{item.title}</li>
									<li>
										<button onClick={() => dispatch(decreaseCart(item))}>
											-
										</button>
										<span>{item.cartQuantity}</span>
										<button onClick={() => dispatch(addToCart(item))}>+</button>
									</li>
									<li>${item.price}</li>
									<li>
										<button
											className="remove-button"
											onClick={() => dispatch(removeFromCart(item))}
										>
											x
										</button>
									</li>
								</ul>
							</div>
						))}
						<div className="clear-cart">
							<div onClick={() => dispatch(clearCart())}>
								<h4>
									Clear Cart
									<span>
										<MdRemoveShoppingCart />
									</span>
								</h4>
							</div>
							<Link to="/foods" className="continue-shopping-sm">
								<h4>
									<span>
										<GiShoppingBag />
									</span>
									Continue Shopping
								</h4>
							</Link>
						</div>
					</div>
				) : (
					<div>Cart is Empty</div>
				)}
			</div>
		</>
	);
}

export default Cart;
