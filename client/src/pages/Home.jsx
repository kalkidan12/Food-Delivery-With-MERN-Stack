import React, { useEffect } from "react";
import axios from "axios";
import homeImage from "../images/home-image.png";
import "./pages.css";
import { FaAngleRight, FaBitbucket } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { TbDiscount2 } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import CatagoriesSection from "../components/catagories/CatagoriesSection";
import Review from "../components/review/Review";
import { Link } from "react-router-dom";

function Home() {
	const foods = useSelector((state) => state.foodList);
	return (
		<div>
			<div className="home-flex">
				<div className="home-left">
					<h5>We Are Delicacy</h5>
					<h1>
						Choose delicacy the <br />
						best healthy way to life
					</h1>
					<div>
						<Link to="/foods">
							<button>
								Order Now
								<span>
									<FaAngleRight />
								</span>
							</button>
						</Link>
					</div>
				</div>
				<div className="home-image">
					<img src={homeImage} alt="home-page-image" />
				</div>
			</div>
			<div className="home-promotion">
				<div className="card-element">
					<span className="icon">
						<FaBitbucket />
					</span>
					<h4 className="text">
						Product from
						<br />
						organic content
					</h4>
				</div>
				<div className="card-element">
					<span className="icon">
						<GiDeliveryDrone />
					</span>
					<h4 className="text">
						Free home <br />
						delivery
					</h4>
				</div>
				<div className="card-element">
					<span className="icon">
						<GiLevelFourAdvanced />
					</span>
					<h4 className="text">
						Promotion of
						<br />
						the week
					</h4>
				</div>
				<div className="card-element">
					<span className="icon">
						<TbDiscount2 />
					</span>
					<h4 className="text">
						-20% discount on <br />
						all vegetables
					</h4>
				</div>
			</div>
			<div className="catagory-section">
				<div className="catagory-title">
					<h1>
						Browser Our Foods{" "}
						<span>
							<br /> Categories
						</span>
					</h1>
					<div>
						<Link to="/foods">
							<button>
								See All<span>{<FaAngleRight />}</span>
							</button>
						</Link>
					</div>
				</div>
				<div className="catagories-nav">
					<CatagoriesSection />
				</div>
			</div>
			<div className="review-section">
				<Review />
			</div>
		</div>
	);
}

export default Home;
