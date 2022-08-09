import React from "react";
import "./review.css";
import bimg1 from "../../images/burger.png";
import bimg2 from "../../images/burger2.png";
import testimonial from "../../images/testimonial.jpg";

function Review() {
	return (
		<section className="">
			<div className="row mt-5 d-flex justify-content-center">
				<div className="col-md-10 col-xl-8 text-center">
					<h3 className="mb-4">Testimonials</h3>
					<p className="mb-4 pb-2 mb-md-5 pb-md-0">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
						error amet numquam iure provident voluptate esse quasi, veritatis
						totam voluptas nostrum quisquam eum porro a pariatur veniam.
					</p>
				</div>
			</div>

			<div className="row text-center d-flex align-items-stretch">
				<div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
					<div className="card testimonial-card">
						<div
							className="card-up"
							style={{ backgroundColor: "#9d789b" }}
						></div>
						<div className="avatar mx-auto">
							<img
								src={testimonial}
								className="rounded-circle img-fluid"
								style={{ width: "200px", height: "200px", borderRadius: "50%" }}
							/>
						</div>
						<div className="card-body">
							<h4 className="mb-4">Maria Smantha</h4>
							<hr />
							<p className="dark-grey-text mt-4">
								<i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit
								amet eos adipisci, consectetur adipisicing elit.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
					<div className="card testimonial-card">
						<div
							className="card-up"
							style={{ backgroundColor: "#7a81a8" }}
						></div>
						<div className="avatar mx-auto">
							<img
								src={testimonial}
								className="rounded-circle img-fluid"
								style={{ width: "200px", height: "200px", borderRadius: "50%" }}
							/>
						</div>
						<div className="card-body">
							<h4 className="mb-4">Lisa Cudrow</h4>
							<hr />
							<p className="dark-grey-text mt-4">
								<i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit
								amet eos adipisci, consectetur adipisicing elit.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 mb-0 d-flex align-items-stretch">
					<div className="card testimonial-card">
						<div
							className="card-up"
							style={{ backgroundColor: "#6d5b98" }}
						></div>
						<div className="avatar mx-auto">
							<img
								src={testimonial}
								className="rounded-circle img-fluid"
								style={{ width: "200px", height: "200px", borderRadius: "50%" }}
							/>
						</div>
						<div className="card-body">
							<h4 className="mb-4">KAlkidan</h4>
							<hr />
							<p className="dark-grey-text mt-4">
								<i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit
								amet eos adipisci, consectetur adipisicing elit.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Review;
