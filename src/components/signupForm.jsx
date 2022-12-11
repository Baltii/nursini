import { Progress, Box, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Hooks/api";
import Final from "./SignUpForms/Final";
import StepOne from "./SignUpForms/StepOne";
import bcrypt from "bcryptjs";

export default function SignupForm() {
  const toast = useToast();

  //state for steps
  const [step, setstep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    tel: "",
    password: "",
    address: "",
    city: "",
    tipe: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
    setProgress(progress + 50);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
    setProgress(progress - 50);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handlePassData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;
    const hashPass = bcrypt.hashSync(value, 10);

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: hashPass,
    }));
  };

  const submitButton = async (e) => {
    e.preventDefault();
    console.log(formData.password);
    const request = {
      ...formData,
    };
    const res = await api.post("/createClient", request);
    console.log(res);
    setTimeout(() => {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        isClosable: true,
        colorScheme: "blue",
      });
      navigate("/login");
    }, 3000);
  };

  const [progress, setProgress] = useState(30);
  return (
    <>
      <Box
        borderWidth="0px"
        rounded="lg"
        //shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={5}
        m="5px auto"
        color={"black"}
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <StepOne
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        ) : (
          ""
        )}
        {step === 2 ? (
          <Final
            submitButton={submitButton}
            prevStep={prevStep}
            handlePassData={handlePassData}
            values={formData}
          />
        ) : (
          ""
        )}
        {console.log(formData)}
      </Box>
    </>
  );
}
