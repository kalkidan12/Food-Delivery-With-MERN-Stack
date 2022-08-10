import React from "react";

function Contact() {
	return (
		<div className="col-12">
			<section className="container mb-4">
				<h2
					className="h1-responsive font-weight-bold text-center my-4 bg-light p-5"
					style={{ fontSize: "40px" }}
				>
					Contact us
				</h2>
				<p className="text-center w-responsive mx-auto mb-5">
					Do you have any questions? Please do not hesitate to contact us
					directly. Our team will come back to you within a matter of hours to
					help you.
				</p>

				<div className="row">
					<div className="col-md-6 mb-5 p-5">
						<div className="row">
							<div className="col-12 mb-4">
								Do you have any questions? Please do not hesitate to contact us
								directly. Our team will come back to you within a matter of
								hours to help you.
							</div>
							<div className="col-6 mb-3 text-center">
								<h1 className="mb-3">The Office</h1>
								<p>Contact 1</p>
								<p>Contact 1</p>
								<p>Contact 1</p>
							</div>
							<div className="col-6 text-center">
								<h1 className="mb-3">The Office</h1>
								<p>contact time</p>
								<p>contact time</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 mb-md-0 mb-5 p-5 card">
						<form
							id="contact-form"
							name="contact-form"
							action="mail.php"
							method="POST"
						>
							<div className="row">
								<div className="col-md-6">
									<div className="md-form mb-0">
										<input
											type="text"
											id="name"
											name="name"
											className="form-control"
										/>
										<label htmlFor="name" className="">
											Your name
										</label>
									</div>
								</div>

								<div className="col-md-6">
									<div className="md-form mb-0">
										<input
											type="text"
											id="email"
											name="email"
											className="form-control"
										/>
										<label htmlFor="email" className="">
											Your email
										</label>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="md-form mb-0">
										<input
											type="text"
											id="subject"
											name="subject"
											className="form-control"
										/>
										<label htmlFor="subject" className="">
											Subject
										</label>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="md-form">
										<textarea
											type="text"
											id="message"
											name="message"
											rows="2"
											className="form-control md-textarea"
										></textarea>
										<label htmlFor="message">Your message</label>
									</div>
								</div>
							</div>
						</form>

						<div className="text-center text-md-left float-start mt-3">
							<a className="btn btn-primary float-start">Send</a>
						</div>
						<div className="status"></div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact;
