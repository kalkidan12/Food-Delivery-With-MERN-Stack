import React from "react";

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
	return (
		<Container maxW="xl" centerContent>
			<Box
				d="flex"
				justifyContent="center"
				textAlign={"center"}
				p={3}
				bg="#e66666"
				w="100%"
				m="40px 0 15px 0"
				borderRadius="lg"
				borderWidth="1px"
			>
				<Text fontSize="4xl" fontFamily="Work sans" color={"white"}>
					Hello, Wellcome
				</Text>
			</Box>
			<Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
				<Tabs isFitted variant="soft-rounded" colorScheme="orange">
					<TabList mb="1em">
						<Tab>Login</Tab>
						<Tab>Sign Up</Tab>
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
