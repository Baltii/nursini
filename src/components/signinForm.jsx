import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

const SigninForm = ({ users }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submitButton = async (e) => {
    e.preventDefault();
    setLoading(true);
    const client = users.find((obj) => obj.email === form.email);
    const passMatch = await bcrypt.compare(form.password, client.password);
    console.log(passMatch);
    if (passMatch) {
      localStorage.setItem("current_user", JSON.stringify(client));
      setUser(client);
      console.log(user);
      setTimeout(() => {
        setLoading(false);
        toast({
          title: "Connected!",
          description: "Have a nice day.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/");
      }, 1000);
    } else {
      setTimeout(() => {
        setLoading(false);
        toast({
          title: "Error!",
          description: "You need to verify your email or password.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }, 1000);
    }
  };

  return (
    <>
      <Box as="form">
        <Stack spacing={4}>
          <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
            Login
          </Heading>
          <Stack mb={"8%"}>
            <Text align={"center"}>
              Don't have an account?{" "}
              <Link
                style={{ color: "#0067FF", "font-weight": "700" }}
                to={"/signup"}
              >
                Register
              </Link>
            </Text>
          </Stack>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type={"email"}
              bgColor={"#E3EFFF"}
              id="email"
              name="email"
              onChange={inputHandler}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                bgColor={"#E3EFFF"}
                id="password"
                name="password"
                onChange={inputHandler}
              />
              <InputRightElement h={"full"}>
                <Button
                  colorScheme={"facebook"}
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            type="submit"
            w="100%"
            colorScheme="green"
            variant="solid"
            onClick={submitButton}
            isLoading={loading}
          >
            Connect
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default SigninForm;
