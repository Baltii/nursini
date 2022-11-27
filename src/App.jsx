import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import getAuth from "./Hooks/auth";
import Main from "./pages/Main";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

function App() {
  useEffect(() => {
  let user = getAuth();
    return () => {
      console.log(user);
    }
  }, [])
  
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
