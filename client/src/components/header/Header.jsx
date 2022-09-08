import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon, MDBBadge } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { LogIn, SignUp, LogOut } from "../../features/slices/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../images/logo.png";
import "./Header.css";

function Header() {
	const navigate = useNavigate();
	const { success, signing, currentUser, token, loggedIn } = useSelector(
		(state) => state.user,
	);
	const dispatch = useDispatch();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLogin, setIsLogin] = useState(
		localStorage.getItem("TOKEN") ? true : false,
	);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [signIn, toggle] = React.useState(true);

	const formData = { firstName, lastName, email, password };
	const signUpUser = (e) => {
		e.preventDefault();
		dispatch(SignUp(formData));
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
	};
	const loginData = { email, password };
	const loginUser = (e) => {
		dispatch(LogIn(loginData));

		setEmail("");
		setPassword("");
		navigate("/");
	};
	const Logout = () => {
		dispatch(LogOut());
		window.location.reload();
		navigate("/");
	};

	const cart = useSelector((state) => state.cart);
	const { cartTotalQuantity } = useSelector((state) => state.cart);

	const totalQuantity = localStorage.getItem("totalQuantity");
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			variant="dark"
			sticky="top"
			style={{
				background:
					"linear-gradient(to right, rgba(53, 82, 211, 0.8), rgba(219, 58, 29, 0.8))",
			}}
		>
			<Container>
				<Navbar.Brand href="/">
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
							<MDBBadge pill color="danger">
								{totalQuantity}
							</MDBBadge>
							<span>
								<MDBIcon fas icon="shopping-cart" color="white"></MDBIcon>
							</span>
						</Nav.Link>
						<NavDropdown title="Account" id="collasible-nav-dropdown">
							<NavDropdown.Item href="/auth">Login</NavDropdown.Item>
							<NavDropdown.Item href="/auth">Sign Up</NavDropdown.Item>
							<NavDropdown.Divider />
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
