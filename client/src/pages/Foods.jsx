import React, { useState } from "react";
import "./pages.css";
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Container,
} from "@chakra-ui/react";
import { CatagoryList } from "../components/foods/FoodCatagories";
import { FaSadCry } from "react-icons/fa";
function Foods() {
	const [catagory, setCatagory] = useState("burger");
	const [selected, setSelected] = useState(1);

	// console.log(catagory);
	return (
		<div className="foods-to-flex">
			<div className="select-catagory">
				<h1>SELECT CATAGORIES</h1>
				<div className="catagory-element">
					<ul>
						<li
							onClick={() => {
								setCatagory("burger");
								setSelected(1);
							}}
							className="to-be-active"
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
						>
							Pizza
						</li>
						<li
							onClick={() => {
								setCatagory("sandwich");
								setSelected(3);
							}}
							className="to-be-active"
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
							className="to-be-active"
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
							className="to-be-active"
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
			</div>
			<CatagoryList catagory={catagory} />
		</div>
	);
}

export default Foods;
