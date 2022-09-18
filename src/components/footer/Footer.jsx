import React from "react";
import {
	MDBFooter,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<MDBFooter
			bgColor="light"
			className="text-center text-lg-start text-muted mt-3"
		>
			<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				<div className="me-5 d-none d-lg-block">
					<span>Get connected with us on social networks:</span>
				</div>

				<div>
					<Link to="" className="me-4 text-reset">
						<MDBIcon fab icon="facebook-f" />
					</Link>
					<Link to="" className="me-4 text-reset">
						<MDBIcon fab icon="twitter" />
					</Link>
					<Link to="" className="me-4 text-reset">
						<MDBIcon fab icon="google" />
					</Link>
					<Link to="" className="me-4 text-reset">
						<MDBIcon fab icon="instagram" />
					</Link>
					<Link to="" className="me-4 text-reset">
						<MDBIcon fab icon="linkedin" />
					</Link>
					<Link to="" className="me-4 text-reset">
						<MDBIcon fab icon="github" />
					</Link>
				</div>
			</section>

			<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				<MDBRow className="mt-3">
					<MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
						<h6 className="text-uppercase fw-bold mb-4">
							<MDBIcon icon="gem" className="me-3" />
							Company name
						</h6>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
							maxime illo debitis neque minima ea sequi est dignissimos.
							Quisquam quis facere vel maiores incidunt unde aut libero
							voluptatibus ex quo?
						</p>
					</MDBCol>

					<MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
						<h6 className="text-uppercase fw-bold mb-4">Services</h6>
						<p>
							<Link to="#!" className="text-reset">
								Service one
							</Link>
						</p>
						<p>
							<Link to="#!" className="text-reset">
								Service one
							</Link>
						</p>
						<p>
							<Link to="#!" className="text-reset">
								Service one
							</Link>
						</p>
						<p>
							<Link to="#!" className="text-reset">
								Service one
							</Link>
						</p>
					</MDBCol>

					<MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
						<h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
						<p>
							<Link to="#!" className="text-reset">
								Home
							</Link>
						</p>
						<p>
							<Link to="#!" className="text-reset">
								foods
							</Link>
						</p>
						<p>
							<Link to="#!" className="text-reset">
								Cart
							</Link>
						</p>
						<p>
							<Link to="#!" className="text-reset">
								Contact Us
							</Link>
						</p>
					</MDBCol>

					<MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
						<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
						<p>
							<MDBIcon icon="home" className="me-2" />
							Adma, 0000, Ethiopia
						</p>
						<p>
							<MDBIcon icon="envelope" className="me-3" />
							kalget1203@gmail.com
						</p>
						<p>
							<MDBIcon icon="phone" className="me-3" /> + 251 961524406
						</p>
						<p>
							<MDBIcon icon="print" className="me-3" /> + 251 961524406
						</p>
					</MDBCol>
				</MDBRow>
			</section>

			<div
				className="text-center p-4"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
			>
				© 2022 Copyright:
				<Link
					className="text-reset fw-bold mx-1 px-1"
					to="https://mdbootstrap.com/"
				>
					kalysite.com
				</Link>
			</div>
		</MDBFooter>
	);
}
export default Footer;
