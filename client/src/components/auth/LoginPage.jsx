import React, { useState, useEffect } from "react";
import * as Components from "../styled/components";
import { useNavigate } from "react-router-dom";
import { LogIn, SignUp, LogOut } from "../../features/slices/UserSlice";
import { useSelector, useDispatch } from "react-redux";
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
import Login from "./Login";
const LoginPage = () => {
	const navigate = useNavigate();
	const { success, signing, currentUser, token, loggedIn } = useSelector(
		(state) => state.user,
	);
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [signIn, toggle] = React.useState(true);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLogin, setIsLogin] = useState(
		localStorage.getItem("TOKEN") ? true : false,
	);
	const loginData = { email, password };
	const loginUser = (e) => {
		dispatch(LogIn(loginData));

		setEmail("");
		setPassword("");
		navigate("/");
	};
	const formData = { firstName, lastName, email, password };
	const signUpUser = (e) => {
		e.preventDefault();
		dispatch(SignUp(formData));
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
	};
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
				<Tabs isFitted variant="soft-rounded">
					<TabList mb="1em">
						<Tab>Login</Tab>
						<Tab>Sign Up</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Login />
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

export default LoginPage;
