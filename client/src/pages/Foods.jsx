import React, { useState, useEffect, useRef } from "react";
import { foodList } from "../components/foods/FoodsData";
import { addToCart } from "../features/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./foods.css";

import { useLocation } from "react-router-dom";
function Foods() {
	const location = useLocation();
	// const selectedItem = location.state.selceted;
	const [catagory, setCatagory] = useState("burger");
	const [selected, setSelected] = useState(1);

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
	const ref = useRef();

	useEffect(() => {
		setFoodList();
	}, [catagory]);

	return (
		<div className="foods">
			<div className="foods-catagory">
				<ul>
					<li
						onClick={() => {
							setCatagory("burger");
							setSelected(1);
						}}
						className="cursor-pointer m-2 p-2"
						style={
							selected == 1
								? {
										borderRadius: "3px",
										color: "white",
										backgroundColor: "#c7335f",
								  }
								: {}
						}
					>
						Burgers
					</li>
					<li
						onClick={() => {
							setCatagory("pizza");
							setSelected(2);
						}}
						style={
							selected == 2
								? {
										borderRadius: "3px",
										color: "white",
										backgroundColor: "#c7335f",
								  }
								: {}
						}
						className="cursor-pointer m-2 p-2"
					>
						Pizza
					</li>
					<li
						onClick={() => {
							setCatagory("sandwich");
							setSelected(3);
						}}
						className="cursor-pointer m-2 p-2"
						style={
							selected == 3
								? {
										borderRadius: "3px",
										color: "white",
										backgroundColor: "#c7335f",
								  }
								: {}
						}
					>
						Sandwich
					</li>
					<li
						onClick={() => {
							setCatagory("salad");
							setSelected(4);
						}}
						className="cursor-pointer m-2 p-2"
						style={
							selected == 4
								? {
										borderRadius: "3px",
										color: "white",
										backgroundColor: "#c7335f",
								  }
								: {}
						}
					>
						Salad
					</li>
					<li
						onClick={() => {
							setCatagory("vegetable");
							setSelected(5);
						}}
						className="cursor-pointer m-2 p-2"
						style={
							selected == 5
								? {
										borderRadius: "3px",
										color: "white",
										backgroundColor: "#c7335f",
								  }
								: {}
						}
					>
						Vegetable
					</li>
					<li
						className="cursor-pointer m-2 p-2"
						onClick={() => {
							setCatagory("juice");
							setSelected(6);
						}}
						style={
							selected == 6
								? {
										borderRadius: "3px",
										color: "white",
										backgroundColor: "#c7335f",
								  }
								: {}
						}
					>
						Juice
					</li>
				</ul>
			</div>

			<div className="catagory">
				{selectedCatagory.map((food) => (
					<div className="flip-card" key={food.id}>
						<div className="flip-card-inner">
							<div
								className="flip-card-front"
								style={{
									borderRadius: "10px",
								}}
							>
								<img src={food.img} alt="image" />
							</div>
							<div
								className="flip-card-back"
								style={{
									borderRadius: "10px",
								}}
							>
								<img
									src={food.img}
									alt="burger image"
									style={{
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

export default Foods;
