import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";


function App() {
  let user = JSON.parse(localStorage.getItem('current_user'));
  useEffect(() => {
    return () => {
      console.log(user)
    };
  }, [user]);
  
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
