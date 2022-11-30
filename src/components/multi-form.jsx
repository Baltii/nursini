import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  useToast,
  CheckboxGroup,
  Stack,
  Checkbox,
  RadioGroup,
  Radio,
  InputRightAddon,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import api from "../Hooks/api";

const Form1 = ({ user, handleInputData, values }) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Information
      </Heading>
      <Flex>
        <FormControl mr="5%" isRequired>
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            placeholder="First name"
            value={user.f_name}
            isDisabled
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
            placeholder="Last name"
            value={user.l_name}
            isDisabled
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%" isRequired>
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          value={user.email}
          isDisabled
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="phone_number" fontWeight={"normal"} mt="2%">
          N°Tel
        </FormLabel>
        <InputGroup size="md">
          <InputLeftAddon children="+216" />
          <Input
            type="tel"
            placeholder="phone number"
            value={values.tel}
            onChange={handleInputData("tel")}
          />
        </InputGroup>
      </FormControl>
    </>
  );
};

const Form2 = ({ handleInputData, values }) => {
  const gouv = ["Tunis", "Ben Arous", "Ariana", "Sousse", "Mahdia", "Sfax"];
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Localisation
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          City
        </FormLabel>
        <Select
          id="city"
          name="city"
          autoComplete="city"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={values.city}
          onChange={handleInputData("city")}
        >
          {gouv.map((e) => (
            <option value={e.valueOf()}>{e.valueOf()}</option>
          ))}
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6} isRequired>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={values.address}
          onChange={handleInputData("address")}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]} isRequired>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={values.state}
          onChange={handleInputData("state")}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]} isRequired>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value={values.zip}
          onChange={handleInputData("zip")}
        />
      </FormControl>
    </>
  );
};

const Form3 = ({ handleInputData, values }) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb={"2%"}>
        Service Details
      </Heading>
      <SimpleGrid columns={1} spacing={4}>
        <FormControl isRequired>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Patient age
          </FormLabel>

          <RadioGroup name="Ptype">
            <Stack direction="column">
              <Radio value="4-15 Years Old" onChange={handleInputData("Ptype")}>
                4-15 Years old
              </Radio>
              <Radio
                value="15-25 Years Old"
                onChange={handleInputData("Ptype")}
              >
                15-25 Years Old
              </Radio>
              <Radio
                value="25-40 Years Old"
                onChange={handleInputData("Ptype")}
              >
                25-40 Years Old
              </Radio>
              <Radio
                value="40-60 Years Old"
                onChange={handleInputData("Ptype")}
              >
                40-60 Years Old
              </Radio>
              <Radio value="+60 Years Old" onChange={handleInputData("Ptype")}>
                +60 Years Old
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Services
          </FormLabel>
          <CheckboxGroup colorScheme="blue">
            <Stack spacing={1} direction={"column"}>
              <Checkbox
                value="Service 1"
                onChange={handleInputData("services")}
              >
                Service 1
              </Checkbox>
              <Checkbox
                value="Service 2"
                onChange={handleInputData("services")}
              >
                Service 2
              </Checkbox>
              <Checkbox
                value="Service 3"
                onChange={handleInputData("services")}
              >
                Service 3
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Shift Time
          </FormLabel>

          <RadioGroup>
            <Stack direction="column">
              <Radio value="Day Shift" onChange={handleInputData("shiftTime")}>
                Day Shift
              </Radio>
              <Radio
                value="Night Shift"
                onChange={handleInputData("shiftTime")}
              >
                Night Shift
              </Radio>
              <Radio value="Full Day" onChange={handleInputData("shiftTime")}>
                Full Day
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="price" fontWeight={"normal"}>
            Price
          </FormLabel>
          <InputGroup size="md">
            <Input
              type="number"
              placeholder="Price"
              name="price"
              value={values.price}
              onChange={handleInputData("price")}
            />
            <InputRightAddon children="DT/Day" />
          </InputGroup>
        </FormControl>

        <Flex>
          <FormControl mr="5%" isRequired>
            <FormLabel htmlFor="start_date" fontWeight={"normal"}>
              Start
            </FormLabel>
            <Input
              id="start_date"
              type={"date"}
              name={"startDate"}
              onChange={handleInputData("startDate")}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="end_date" fontWeight={"normal"}>
              End
            </FormLabel>
            <Input
              id="end_date"
              type={"date"}
              name="endDate"
              onChange={handleInputData("endDate")}
            />
          </FormControl>
        </Flex>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Patient details
          </FormLabel>
          <Textarea
            placeholder="Describe your situation"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            name="message"
            onBlur={handleInputData("message")}
            fontSize={{
              sm: "sm",
            }}
          />
          <FormHelperText>
            Brief description for situation of the patient.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function Multistep({ user, nurse }) {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const [formData, setFormData] = useState({
    id: nanoid(),
    tel: user.tel,
    city: user.city,
    address: user.address,
    state: user.state,
    zip: user.zip,
    Ptype: "",
    services: "",
    shiftTime: "",
    price: null,
    startDate: "",
    endDate: "",
    message: "",
    emailPatient: user.email,
    emailNurse: nurse,
  });

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    console.log(formData);
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const submitButton = (e) => {
    // e.preventDefault();
    const request = {
      ...formData,
    };
    const res = api.post("/createWork", request);
    console.log(res);
    if (res.status === 200) {
      setTimeout(() => {
        toast({
          title: "Work submited.",
          description:
            "We've send those details to the Nurse chosen, Wait him/her confirmation.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }, 3000);
    }
  };
  return (
    <>
      <Box
        borderWidth="0px"
        rounded="lg"
        // shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Form1
            user={user}
            handleInputData={handleInputData}
            values={formData}
          />
        ) : step === 2 ? (
          <Form2 handleInputData={handleInputData} values={formData} />
        ) : (
          <Form3 handleInputData={handleInputData} values={formData} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="red"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={
                  (step === 1 && formData.tel === "") ||
                  (step === 2 && formData.city,
                  formData.address,
                  formData.state,
                  formData.zip === "") ||
                  step === 3
                }
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="blue"
                variant="solid"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                isDisabled={
                  (formData.Ptype,
                  formData.endDate,
                  formData.services,
                  formData.shiftTime,
                  formData.startDate === "") ||
                  formData.price === null
                }
                w="7rem"
                colorScheme="green"
                variant="solid"
                onClick={() => {
                  submitButton();
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
