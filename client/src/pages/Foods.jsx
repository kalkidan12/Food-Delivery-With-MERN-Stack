import React, { useState } from "react";
import "./pages.css";

import { CatagoryList } from "../components/foods/FoodCatagories";
function Foods() {
	const [catagory, setCatagory] = useState("burger");
	const [selected, setSelected] = useState(1);

	return (
		<div className="">
			<div className="d-flex justify-content-center align-items-center text-center p-3 m-2 bg-warning text-center">
				<ul className="nav nav-pills text-center">
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

			<CatagoryList catagory={catagory} />
		</div>
	);
}

export default Foods;
