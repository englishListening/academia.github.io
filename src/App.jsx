import React from "react";
import Header from "./components/Pages/Header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SignUp from "./components/Pages/SignUp";
import { useState } from "react";
import Googlepay from "./components/GooglePay";
import Listening from "./components/Pages/Listening";
import Reading from "./components/Pages/Reading";
import Speaking from "./components/Pages/Speaking";
import Writing from "./components/Pages/Writing";
 const App = () =>{
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/Listening" element={<Listening/>}/>
      <Route path="/Reading" element={<Reading/>}/>
      <Route path="/Speaking" element={<Speaking/>}/>
      <Route path="/Writing" element={<Writing/>}/>
      <Route path="/signUp" element={<SignUp setIsAuth={setIsAuth}/>}/>
    </Routes>
    </BrowserRouter>
  )
 }

 export default App