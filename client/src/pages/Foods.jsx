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
	const [bselected, bsetSelected] = useState(false);
	const [pselected, psetSelected] = useState(false);
	const [snselected, snsetSelected] = useState(false);
	const [sselected, ssetSelected] = useState(false);
	const [vselected, vsetSelected] = useState(false);
	const [jselected, jsetSelected] = useState(false);
	console.log(catagory);
	return (
		<div className="foods-to-flex">
			<div className="select-catagory">
				<h1>SELECT CATAGORIES</h1>
				<div className="catagory-element">
					<ul>
						<li
							onClick={() => setCatagory("burger")}
							className="to-be-active"
							style={
								bselected
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
							onClick={() => setCatagory("pizza")}
							style={
								pselected
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
							onClick={() => setCatagory("sandwich")}
							className="to-be-active"
							style={
								snselected
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
							onClick={() => setCatagory("salad")}
							className="to-be-active"
							style={
								sselected
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
							onClick={() => setCatagory("vegetable")}
							className="to-be-active"
							style={
								vselected
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
							onClick={() => setCatagory("juice")}
							style={
								jselected
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
