import React from "react";
import './App.css'
import NavbarSimple from "./Components/NavbarSimple";


import { BrowserRouter , Routes , Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Skills from "./Components/Skills";


function App() {

  return (
    <>
      <BrowserRouter>
    <NavbarSimple/>
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/skills" element={<Skills></Skills>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
