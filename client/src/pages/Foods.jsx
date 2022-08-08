import React from "react";
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Container,
} from "@chakra-ui/react";
import Burger from "../components/foods/Burger";
function Foods() {
	return (
		<div>
			<Container bg="light" centerContent>
				<div>Get All Popular FoodsAnd Order Now</div>
			</Container>
			<Container maxW="2xl" bg="light" centerContent>
				<Tabs variant="soft-rounded" colorScheme="green">
					<TabList>
						<Tab>Burgers</Tab>
						<Tab>Pizza</Tab>
						<Tab>Sandwich</Tab>
						<Tab>Fruits</Tab>
						<Tab>Juice</Tab>
						<Tab>Meat</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Burger />
						</TabPanel>
						<TabPanel>
							<p>two!</p>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Container>
		</div>
	);
}

export default Foods;
