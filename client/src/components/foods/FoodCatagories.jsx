import React, { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { foodList } from "./FoodsData";
import { addToCart } from "../../features/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./foodCatagories.css";
export function CatagoryList({ catagory }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleAddToCart = (food) => {
		dispatch(addToCart(food));
		navigate("/cart");
	};
	const [selectedCatagory, setSelectedCatagory] = useState([]);
	const setFoodList = () => {
		const catagoryItem = foodList.filter((food) => food.catagory == catagory);
		setSelectedCatagory(catagoryItem);
	};
	useEffect(() => {
		setFoodList();
	}, [catagory]);
	console.log(selectedCatagory);
	return (
		<div className="container">
			<div className="row justify-content-space-around align-items-felx-center">
				{selectedCatagory.map((food) => (
					<div className="col-3 flip-card mx-auto mb-4" key={food.id}>
						<div className="flip-card-inner ">
							<div
								className="flip-card-front"
								style={{
									width: "300px",
									height: "300px",
									borderRadius: "10px",
								}}
							>
								<img
									src={food.img}
									alt="burger image"
									style={{ width: "300px", height: "300px" }}
								/>
							</div>
							<div
								className="flip-card-back"
								style={{
									width: "300px",
									height: "300px",
									borderRadius: "10px",
								}}
							>
								<img
									src={food.img}
									alt="burger image"
									style={{
										width: "200px",
										height: "200px",
										marginLeft: "50px",
										padding: "10px",
										borderRadius: "50%",
									}}
								/>
								<h1>{food.title}</h1>
								<p>{food.price} Br</p>
								<button onClick={() => handleAddToCart(food)}>
									Add To Cart
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
