// import React, { useState, useRef, useEffect } from "react";
// import "./Header.css";
// import logo from "../../images/logo.png";
// import { FaBars } from "react-icons/fa";
// import { FaAngleDown } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import { AiFillCloseSquare } from "react-icons/ai";
// import { Link } from "react-router-dom";

// function Header() {
// 	const menuRef = useRef(null);
// 	const [showMenu, setShowMenu] = useState(false);

// 	// 👇️ check if element is focused on mount
// 	useEffect(() => {}, []);
// 	return (
// 		<header>
// 			<nav className="nav-bar">
// 				<div className={showMenu ? "nav-toggler" : "nav-toggler-hide"}>
// 					<span onClick={() => setShowMenu(!showMenu)}>
// 						<FaBars />
// 					</span>
// 				</div>
// 				<div className="nav-logo">
// 					<Link to="/">
// 						<img src={logo} width="80px" height="50px" />
// 					</Link>
// 				</div>
// 				<div className={showMenu ? "nav-links" : "nav-links-hide"}>
// 					<div className="mobile-nav-logo">
// 						<Link to="/">
// 							<img src={logo} width="80px" height="50px" />
// 						</Link>
// 					</div>
// 					<Link to="/" onClick={() => setShowMenu(!showMenu)}>
// 						<li className="nav-item">Home</li>
// 					</Link>
// 					<Link to="/foods" onClick={() => setShowMenu(!showMenu)}>
// 						<li className="nav-item">Foods</li>
// 					</Link>
// 					<Link to="/cart" onClick={() => setShowMenu(!showMenu)}>
// 						<li className="nav-item">Cart</li>
// 					</Link>
// 					<Link to="/contact" onClick={() => setShowMenu(!showMenu)}>
// 						<li className="nav-item">Contact</li>
// 					</Link>
// 					<div className={"close-toggler"}>
// 						<span onClick={() => setShowMenu(!showMenu)}>
// 							<AiFillCloseSquare />
// 						</span>
// 					</div>
// 				</div>
// 				<div className="nav-right">
// 					<Link to="/cart">
// 						<li className="right-item">
// 							<i className="cart-icon">
// 								<FaShoppingCart />
// 							</i>
// 							<span className="cart-quantity">2</span>
// 						</li>
// 					</Link>
// 					<div className="dropdown">
// 						<li className="dropbtn">
// 							<i>
// 								<FaUserCircle />
// 							</i>

// 							<i className="drop-icon">
// 								<FaAngleDown />
// 							</i>
// 						</li>
// 						<div className="dropdown-content">
// 							<a href="#">Login</a>
// 							<a href="#">Sign Up</a>
// 						</div>
// 					</div>
// 				</div>
// 			</nav>
// 		</header>
// 	);
// }

// export default Header;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon, MDBBadge } from "mdb-react-ui-kit";

import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../images/logo.png";

import "./Header.css";

function Header() {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			variant="dark"
			style={{
				background:
					"linear-gradient(to right, rgba(53, 82, 211, 0.8), rgba(219, 58, 29, 0.8))",
			}}
		>
			<Container>
				<Navbar.Brand href="#home">
					<img src={logo} width="50px" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/" className="nav-item-to-hover">
							Home
						</Nav.Link>
						<Nav.Link href="/foods" className="nav-item-to-hover">
							Foods
						</Nav.Link>
						<Nav.Link href="/cart" className="nav-item-to-hover">
							Cart
						</Nav.Link>
						<Nav.Link href="/contact" className="nav-item-to-hover">
							Contact
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="/cart">
							{/* <i className="cart-icon">
								<FaShoppingCart />
							</i>
							<span className="cart-quantity">2</span> */}
							<MDBBadge pill color="danger">
								3
							</MDBBadge>
							<span>
								<MDBIcon fas icon="shopping-cart" color="white"></MDBIcon>
							</span>
						</Nav.Link>
						<NavDropdown title="Account" id="collasible-nav-dropdown">
							<NavDropdown.Item href="">Login</NavDropdown.Item>
							<NavDropdown.Item href="">Sign Up</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
