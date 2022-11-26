import { ChakraProvider, LightMode } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <LightMode>
    <App />
    </LightMode>
  </ChakraProvider>
    
);
