import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AllProducts from './document/AllProducts';
import ProductDetail from './document/ProductDetail';
import Home from './document/Home';
import {
  ChakraProvider,
  
  theme,
} from '@chakra-ui/react';
import NavbarWrapper from './document/Navbar'
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavbarWrapper />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AllProducts' element={<AllProducts />}></Route>
        <Route path='/ProductDetail' element={<ProductDetail />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
