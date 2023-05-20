import React from "react";
import Header from "./components/Pages/Header";
import { BrowserRouter,Routes,Route, Form } from "react-router-dom";
import SignUp from "./components/Pages/SignUp";
import { useState } from "react";
import Listening from "./components/Pages/Listening";
import Reading from "./components/Pages/Reading";
import Speaking from "./components/Pages/Speaking";
import Writing from "./components/Pages/Writing";
import Animation from "./components/Pages/Animation";
import AboutUs from "./components/Pages/AboutUs";
import LOMO from "./components/Pages/images/clock.png"
import "./App.css"

import styled from "styled-components";


 const App = () =>{
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

  return(
    <div className="body">

    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/Listening" element={<Listening/>}/>
      <Route path="/Reading" element={<Reading/>}/>
      <Route path="/Speaking" element={<Speaking/>}/>
      <Route path="/Writing" element={<Writing/>}/>
      <Route path="/Animation" element={<Animation/>}/>
      <Route path="/About" element={<AboutUs/>}/>
      <Route path="/signUp" element={<SignUp setIsAuth={setIsAuth}/>}/>
      {/* <Route path="/signUp" element={<Form/>}/> */}
      {/* <Route path="/signUp" element={<Register/>}/> */}
    </Routes>
    </BrowserRouter>
    </div>
  )
 }

 export default App