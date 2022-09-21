import Container from "react-bootstrap/Container";
import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon, MDBBadge } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../../images/logo.png";
import "./Header.css";
import { LogOut } from "../../features/slices/UserSlice";

function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const Logout = () => {
		dispatch(LogOut());
		window.location.reload();
		navigate("/");
	};

	const totalQuantity = localStorage.getItem("totalQuantity");
	const currentUser = localStorage.getItem("food-user");

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
					<Nav className="me-auto"></Nav>
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
							<MDBBadge pill color="warning">
								{totalQuantity}
							</MDBBadge>
							<span>
								<MDBIcon fas icon="shopping-cart" color="white"></MDBIcon>
							</span>
						</Nav.Link>

						{currentUser ? (
							<>
								<Nav.Link href="">
									<span>
										<MDBIcon fas icon="" color="white"></MDBIcon>
									</span>
								</Nav.Link>
								<Nav.Link onClick={() => Logout()} href="">
									<span>
										<MDBIcon fas icon="power-off" color="white">
											<span style={{ marginLeft: "5px" }}>logout</span>
										</MDBIcon>
									</span>
								</Nav.Link>
							</>
						) : (
							<NavDropdown title="Account" id="collasible-nav-dropdown">
								<NavDropdown.Item href="/auth">Login</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/auth">Sign Up</NavDropdown.Item>
							</NavDropdown>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
