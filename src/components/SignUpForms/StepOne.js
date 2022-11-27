import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";

const StepOne = ({ nextStep, handleFormData, values }) => {
  const gouv = ["Tunis", "Ben Arous", "Ariana", "Sousse", "Mahdia", "Sfax"];
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.fname) ||
      validator.isEmpty(values.lname) ||
      validator.isEmpty(values.email) ||
      validator.isEmpty(values.tel) ||
      validator.isEmpty(values.address) ||
      validator.isEmpty(values.city) ||
      validator.isEmpty(values.tipe)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <Box as="form" onSubmit={submitFormData}>
        <Heading w="100%" textAlign={"center"} fontWeight="bold" mb="1%">
          SIGN UP
        </Heading>
        <Stack mb={"8%"}>
          <Text align={"center"}>
            Already a user?{" "}
            <Link
              style={{ color: "#0067FF", "font-weight": "700" }}
              to={"/login"}
            >
              Login
            </Link>
          </Text>
        </Stack>
        <Stack spacing={4} paddingBottom={"20px"}>
          <HStack>
            <FormControl isRequired>
              <FormLabel htmlFor="fname" fontWeight={"normal"}>
                First name
              </FormLabel>
              <Input
                id="fname"
                placeholder="First name"
                required
                bgColor={"#E3EFFF"}
                name="fname"
                value={values.fname}
                onChange={handleFormData("fname")}
              />
              {error ? (
                <FormErrorMessage sx={{ color: "red" }}>
                  This is a required field
                </FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="lname" fontWeight={"normal"}>
                Last name
              </FormLabel>
              <Input
                id="lname"
                placeholder="Last name"
                bgColor={"#E3EFFF"}
                name="lname"
                value={values.lname}
                onChange={handleFormData("lname")}
              />
              {error ? (
                <FormErrorMessage sx={{ color: "red" }}>
                  This is a required field
                </FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
          </HStack>
          <FormControl mt="2%" isRequired>
            <FormLabel htmlFor="email" fontWeight={"normal"}>
              Email address
            </FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              bgColor={"#E3EFFF"}
              name="email"
              value={values.email}
              onChange={handleFormData("email")}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
            {error ? (
              <FormErrorMessage sx={{ color: "red" }}>
                This is a required field
              </FormErrorMessage>
            ) : (
              ""
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="address" fontWeight={"normal"}>
              Address
            </FormLabel>
            <Input
              type="Text"
              placeholder="Address"
              bgColor={"#E3EFFF"}
              id="address"
              name="address"
              value={values.address}
              onChange={handleFormData("address")}
            />
            {error ? (
              <FormErrorMessage sx={{ color: "red" }}>
                This is a required field
              </FormErrorMessage>
            ) : (
              ""
            )}
          </FormControl>
          <HStack>
            <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
              <FormLabel htmlFor="city">City</FormLabel>
              <Select
                id="city"
                name="city"
                autoComplete="city"
                placeholder="Select city"
                w="full"
                bgColor={"#E3EFFF"}
                value={values.city}
                onChange={handleFormData("city")}
              >
                {gouv.map((e) => (
                  <option style={{ background: "#FFFFFF" }} value={e.valueOf()}>
                    {e.valueOf()}
                  </option>
                ))}
              </Select>
              {error ? (
                <FormErrorMessage sx={{ color: "red" }}>
                  This is a required field
                </FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="phone-number" fontWeight={"normal"}>
                N°Tel
              </FormLabel>
              <Input
                id="tel"
                type={"tel"}
                placeholder="N°Tel"
                bgColor={"#E3EFFF"}
                name="tel"
                value={values.tel}
                onChange={handleFormData("tel")}
              />
              {error ? (
                <FormErrorMessage sx={{ color: "red" }}>
                  This is a required field
                </FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
          </HStack>

          <Stack direction="row" spacing={"auto"} w={"100%"} pr={"20"}>
            <Text>You are a : </Text>
            <RadioGroup id="tipe" name="tipe" value={values.tipe} isRequired>
              <Radio
                onChange={handleFormData("tipe")}
                value={"1"}
                borderColor={"blue.400"}
                px={"20px"}
              >
                Patient
              </Radio>
              <Radio
                onChange={handleFormData("tipe")}
                value={"2"}
                borderColor={"blue.400"}
                px={"20px"}
              >
                Nurse
              </Radio>
            </RadioGroup>
          </Stack>
        </Stack>
        <Button w="100%" colorScheme="blue" variant="solid" type="submit">
          Next
        </Button>
      </Box>
    </>
  );
};

export default StepOne;
