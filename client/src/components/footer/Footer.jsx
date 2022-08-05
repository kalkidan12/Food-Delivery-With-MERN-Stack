import React from "react";
import "./footer.css";
import logo from "../../images/logo.png";

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<h5>
							<img src={logo} width="150px" height={"70px"} />
						</h5>
						<div className="row">
							<div className="col-6">
								<ul className="list-unstyled">
									<li>
										<a href="">Home</a>
									</li>
									<li>
										<a href="">Foods</a>
									</li>
									<li>
										<a href="">Support</a>
									</li>
									<li>
										<a href="">Contact Us</a>
									</li>
								</ul>
							</div>
							<div className="col-6">
								<ul className="list-unstyled">
									<li>
										<a href="">Services</a>
									</li>
									<li>
										<a href="">Support</a>
									</li>
									<li>
										<a href="">Terms and Plicy</a>
									</li>
									<li>
										<a href="">About</a>
									</li>
								</ul>
							</div>
						</div>

						<br />
					</div>
					<div className="col-md-2">
						<h5 className="text-md-right">Contact Us</h5>
						<hr />
					</div>
					<div className="col-md-5">
						<form>
							<fieldset className="form-group">
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									placeholder="Enter email"
								/>
							</fieldset>
							<fieldset className="form-group">
								<textarea
									className="form-control"
									id="exampleMessage"
									placeholder="Message"
								></textarea>
							</fieldset>
							<fieldset className="form-group text-xs-right">
								<button
									type="button"
									className="btn btn-secondary-outline btn-lg"
								>
									Send
								</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
