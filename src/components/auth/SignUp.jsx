import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUp } from "../../features/slices/UserSlice";

const Signup = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const toast = useToast();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [first_name, setFirstName] = useState();
	const [last_name, setLastName] = useState();
	const [email, setEmail] = useState();
	const [confirmpassword, setConfirmpassword] = useState();
	const [password, setPassword] = useState();

	const submitHandler = () => {
		if (!first_name || !last_name || !email || !password || !confirmpassword) {
			toast({
				title: "Please Fill all the Feilds",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			return;
		}
		if (password !== confirmpassword) {
			toast({
				title: "Passwords Do Not Match",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			return;
		}
		console.log(first_name, last_name, email, password);
		const data = { first_name, last_name, email, password };
		try {
			//hre
			dispatch(SignUp(data));
			toast({
				title: "Registration Successful",
				status: "success",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			navigate("/");
		} catch (error) {
			toast({
				title: "Error Occured!",
				description: error.response.data.message,
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
		}
	};

	return (
		<VStack spacing="5px">
			<FormControl id="first-name" isRequired>
				<FormLabel>First Name</FormLabel>
				<Input
					placeholder="Enter Your Name"
					onChange={(e) => setFirstName(e.target.value)}
				/>
			</FormControl>
			<FormControl id="last-name" isRequired>
				<FormLabel>Last Name</FormLabel>
				<Input
					placeholder="Enter Your Name"
					onChange={(e) => setLastName(e.target.value)}
				/>
			</FormControl>
			<FormControl id="email" isRequired>
				<FormLabel>Email Address</FormLabel>
				<Input
					type="email"
					placeholder="Enter Your Email Address"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormControl>
			<FormControl id="password" isRequired>
				<FormLabel>Password</FormLabel>
				<InputGroup size="md">
					<Input
						type={show ? "text" : "password"}
						placeholder="Enter Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<InputRightElement width="4.5rem">
						<Button h="1.75rem" size="sm" onClick={handleClick}>
							{show ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>
			<FormControl id="password" isRequired>
				<FormLabel>Confirm Password</FormLabel>
				<InputGroup size="md">
					<Input
						type={show ? "text" : "password"}
						placeholder="Confirm password"
						onChange={(e) => setConfirmpassword(e.target.value)}
					/>
					<InputRightElement width="4.5rem">
						<Button h="1.75rem" size="sm" onClick={handleClick}>
							{show ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</FormControl>

			<Button
				colorScheme="blue"
				width="100%"
				style={{ marginTop: 15 }}
				onClick={submitHandler}
			>
				Sign Up
			</Button>
		</VStack>
	);
};

export default Signup;
