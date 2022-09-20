import React, { useState } from "react";

import "./login.css";
import {
	Container,
	Box,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Text,
} from "@chakra-ui/react";
import Signup from "./SignUp";
import LogIn from "./Login";
const AuthPage = () => {
	const [title, setTitle] = useState(true);
	return (
		<Container maxW="xl" centerContent>
			<Box
				d="flex"
				justifyContent="center"
				textAlign={"center"}
				p={2}
				bg="#e66666"
				w="100%"
				m="40px 0 15px 0"
				borderRadius="lg"
				borderWidth="1px"
			>
				<Text fontSize="3xl" fontFamily="Work sans" color={"white"}>
					Hello, Wellcome {title ? "Back" : ""}
				</Text>
			</Box>
			<Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
				<Tabs isFitted variant="soft-rounded" colorScheme="orange">
					<TabList mb="1em">
						<Tab onClick={() => setTitle(true)}>Login</Tab>
						<Tab onClick={() => setTitle(false)}>Sign Up</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<LogIn />
						</TabPanel>
						<TabPanel>
							<Signup />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Container>
	);
};

export default AuthPage;
