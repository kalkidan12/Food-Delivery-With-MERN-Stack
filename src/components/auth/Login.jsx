import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../features/slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const LogIn = () => {
	const { success } = useSelector((state) => state.user);
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const toast = useToast();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const submitHandler = async () => {
		setLoading(true);
		if (!email || !password) {
			toast({
				title: "Please Fill all the Feilds",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setLoading(false);
			return;
		}

		try {
			const data = { email, password };
			dispatch(Login(data));
			if (success) {
				toast({
					title: "Login Successful",
					status: "success",
					duration: 5000,
					isClosable: true,
					position: "bottom",
				});
				setLoading(false);
				navigate("/");
				window.location.reload();
			}
		} catch (error) {
			toast({
				title: "Error Occured!",
				description: error.response.data.message,
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			});
			setLoading(false);
		}
	};

	return (
		<VStack spacing="10px">
			<FormControl id="email" isRequired>
				<FormLabel>Email Address</FormLabel>
				<Input
					value={email}
					type="email"
					placeholder="Enter Your Email Address"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormControl>
			<FormControl id="password" isRequired>
				<FormLabel>Password</FormLabel>
				<InputGroup size="md">
					<Input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type={show ? "text" : "password"}
						placeholder="Enter password"
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
				isLoading={loading}
			>
				Login
			</Button>
		</VStack>
	);
};

export default LogIn;
