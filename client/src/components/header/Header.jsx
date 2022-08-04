import React, { useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
	return (
		<header>
			<nav className="nav-bar">
				<div className="nav-logo">LOGO</div>
				<div className="nav-toggler">
					<span>
						<FaBars />
					</span>
				</div>
				<div className="nav-links">
					<li className="nav-item">Home</li>
					<li className="nav-item">Foods</li>
					<li className="nav-item">Cart</li>
					<li className="nav-item">Contact</li>
				</div>
				<div className="nav-right">
					<li className="right-item">
						<i className="cart-icon">
							<FaShoppingCart />
						</i>
						<span className="cart-quantity">2</span>
					</li>
					<div className="dropdown">
						<li className="dropbtn">
							<i>
								<FaUserCircle />
							</i>

							<i className="drop-icon">
								<FaAngleDown />
							</i>
						</li>
						<div className="dropdown-content">
							<a href="#">Login</a>
							<a href="#">Sign Up</a>
						</div>
					</div>
					{/* <li className="right-item dropdown">account Icon</li> */}
				</div>
			</nav>
		</header>
	);
}

export default Header;
