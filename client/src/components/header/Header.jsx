import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon, MDBBadge } from "mdb-react-ui-kit";

import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../images/logo.png";
import { useSelector } from "react-redux";

import "./Header.css";

function Header() {
	const cart = useSelector((state) => state.cart);

	const { cartTotalQuantity } = useSelector((state) => state.cart);

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
								{cartTotalQuantity}
							</MDBBadge>
							<span>
								<MDBIcon fas icon="shopping-cart" color="white"></MDBIcon>
							</span>
						</Nav.Link>
						<NavDropdown title="Account" id="collasible-nav-dropdown">
							<NavDropdown.Item href="">Login</NavDropdown.Item>
							<NavDropdown.Item href="">Sign Up</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
