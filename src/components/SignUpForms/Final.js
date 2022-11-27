import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import validator from "validator";
import bcrypt from "bcryptjs";

const Final = ({
  submitButton,
  handleFormData,
  handlePassData,
  prevStep,
  values,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [passConfirm, setPassConfirm] = useState("");

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.password)) {
      setError(true);
    }
  };
  return (
    <>
      <Box as="form" onSubmit={submitFormData}>
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
          Create Password
        </Heading>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              bgColor={"#E3EFFF"}
              id="password"
              name="password"
              onBlur={handlePassData("password")}
            />
            <InputRightElement h={"full"}>
              <Button
                colorScheme={"facebook"}
                variant={"ghost"}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        {error ? (
          <FormErrorMessage sx={{ color: "red" }}>
            This is a required field
          </FormErrorMessage>
        ) : (
          ""
        )}
        <FormControl id="passwordConfirm" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            bgColor={"#E3EFFF"}
            onChange={(e) => setPassConfirm(e.target.value)}
          />
        </FormControl>
        {passConfirm !== values.password ? (
          <FormErrorMessage sx={{ color: "red" }}>
            Confirm Password is invalid!
          </FormErrorMessage>
        ) : (
          ""
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                colorScheme="red"
                variant="solid"
                w="7rem"
                mr="5%"
                onClick={prevStep}
              >
                Back
              </Button>
            </Flex>
            <Button
              type="submit"
              w="7rem"
              colorScheme="green"
              variant="solid"
              onClick={submitButton}
            >
              Submit
            </Button>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default Final;
