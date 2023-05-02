import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart } from "../BarChart";
import { db,storage } from "../config";
import { useState,useEffect } from "react";
import { deepCopy } from "@firebase/util";
import { collection,getDocs } from "firebase/firestore";
import MapComponent from "../MapBasemap";
import HEADER from "../Parts/HEADER";
import FOOTER from "../Parts/Footer";
import Googlepay from "../GooglePay";
import { Link } from "react-router-dom";

const Ahref = styled("a")`

font-family: 'Poppins', sans-serif;
text-decoration: none;
font-size: 20px;
text-align: center;
text-decoration: none;
list-style: none;
display: flex;
align-items: center;
color:#001499;
&:hover{
  cursor: pointer;
  transition:.5s;
  color: red;
}
`
    const Container = styled("div")`
    
      margin: 0 auto;
      text-align: center;
    `
      const Container1 = styled("div")`
      max-width: 1100px;
      margin: 0 auto;
      text-align: center;
      `

    const WhatCard = styled("div")`
    /* width: 50%; */
    background: linear-gradient(110deg, #33a7ef 60%,rgba(238, 85, 20, 0) 0);
    border-radius: 5px 0 0 5px;
     
     margin-left: 20rem;
     display: flex;
     align-items: center;
     margin-top: 2rem;
    padding: .8rem;
    `
    const WhatCard1= styled("div")`
      background: linear-gradient(110deg, #33a7ef 63%,rgba(238, 85, 20, 0) 0);
    border-radius: 5px 0 0 5px;
     
     margin-left: 23rem;
     display: flex;
     align-items: center;
     margin-top: 1rem;
    padding: .8rem;
    `
    const WhatCard2= styled("div")`
    background: linear-gradient(110deg, #33a7ef 65%,rgba(238, 85, 20, 0) 0);
  border-radius: 5px 0 0 5px;
   
   margin-left: 25rem;
   display: flex;
   align-items: center;
   margin-top: 1rem;
  padding: .8rem;
  `
  const WhatCardtext = styled("h2")`
    font-family: 'Pacifico', cursive;
  `
    const ContainerH1 = styled("h1")`
    margin: auto 0;
    margin-left: 5rem;
    margin-right:1rem;
    font-style: 20px;
    font-family: 'Lobster', cursive;
    color: #001499;
    `
    const Logo = styled("img")`
      height: 54px;
    width: 66px;
    margin: auto 0;
    margin-left: 5rem;
    margin-right:1rem;
    `
    const NavBar = styled('div')`
      display: flex;
      justify-content: space-between;
      
    `
    const NavLittle = styled('div')`
      height: 70px;
    display: flex;
    align-items: center;
    `
    const NavButton = styled('div')`
      height: 70px;
      display: flex;
      align-items: center;
      animation: navbut 1.69s ease-in-out;
      margin-right: 2rem;
      @keyframes navbut {
        0%{
          margin-right: -100rem;
        }
        100%{
          margin-right: 2rem;
        }
      }
    `
   const English = styled("div")`
    margin: 0;
    animation: navbut 2s ease-in-out;
    margin-right: 5rem;
    display: flex;
    justify-content: space-between;
    @keyframes navbut {
        0%{
          margin-right: -100rem;
        }
        100%{
          margin-right: 5rem;
        }
      }
      

      `
   const EnglishImg = styled("img")`
    width: auto;
    height: 630px;
    animation: navbut 2s ease-in-out;;
      @keyframes navbut {
        0%{
          margin-right: -100rem;
        }
        100%{
          margin-right: 2rem;
        }
      }
   `
   const EnglishDiv = styled("div")`
   margin-left: 10px;
   animation: span 2s ease-out;;
   @keyframes span {
     0%{
       margin-left: -100rem;
      }
      100%{
        margin-left: 2rem;
        }
      }
      `
   const EnglishH1 = styled("h1")`
    margin-left:8rem;
    margin-top: 8rem;
    font-size: 64px;
    font-family: 'Source Serif Pro', serif;
    `
    const Englishp = styled('p')`
   width: 500px;
    margin-left:8rem;
    font-size: 30px;
   `
  const About = styled("section")`
    margin: 8rem auto;
    
    
    `
  const Abouth1 = styled("h1")`
    font-size: 50px;
    text-align: center;
    transition: 2s;
    color: #33a7ef;
    font-family: 'Pacifico', cursive;
    margin-bottom: 3rem;
    `
  const AboutDiv = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
  const AboutP = styled("p")`
    width: 500px;
    font-size: 24px;
    font-family: "Source Serif Pro", serif ;
    margin-right: 160px;
    `
  const AboutName= styled("p")`
    font-size: 40px;
    font-family: "Source Serif Pro", serif ;
    margin-bottom: 1rem;
    text-align: center;
  `
  const TypeCards = styled("div")`
    
    display: flex;
    justify-content: space-around;
    `
  const TypeCard = styled("div")`
    box-shadow: 0px 1px 30px rgba(26, 10, 3, 0.05);
    border-radius: 10px;
    width: 360px;
    height: 469px;
    /* margin-right: 30px; */
    background: #FFFFFF;
    &:hover{
      background-color: rgba(238, 85, 20,0.1);
      transition: 0.5s;
    }
    `
  const Typeh6 = styled("h6")`
     font-style: normal;
     font-weight: 600;
     font-size: 22px;
     line-height: 150%;
     text-align: center;
     margin: 0 auto;
     color: #1A0A03;
     font-family: 'Source Serif Pro';
     `
  const Typep = styled("p")`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    text-align: center;
    color: #1A0A03;
    font-family: 'Poppins';
    
    opacity: 0.7;
    `

const TypeIcon = styled("div")`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 56px;
    margin-bottom: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(18, 101, 225,0.1);
    `
const Typeimg = styled("img")`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 140px;
  `

const Header = () =>{
    
  const [englishType,setEnglishType] = useState([])
  const TypeEnglish = collection(db,"EnglishTypes")
  useEffect(()=>{
    const getEnglishType = async () =>{
      const data = await getDocs(TypeEnglish)
      setEnglishType(data.docs.map((doc)=>({...doc.data(),id: deepCopy.id})))
    };
    getEnglishType()
  },[])

return(
      <Container>
       <HEADER/>
        <About>
          <Abouth1>
            What you can do in this web site
          </Abouth1>
          <WhatCard><WhatCardtext>Listen and complete Listenings at level IELTS !</WhatCardtext></WhatCard>
          <WhatCard1><WhatCardtext>Develop your reading skills !</WhatCardtext></WhatCard1>
          <WhatCard2><WhatCardtext>Speak in English like britians !</WhatCardtext></WhatCard2>
        </About>
        <About>
          <Abouth1>
            Types of learning 
          </Abouth1>
          <Container1>
          <TypeCards>
            {englishType.map((d)=>(
              
          <TypeCard>
            <TypeIcon>
              <Typeimg src={d.img} alt="" />
            </TypeIcon>

            
            <Ahref href={d.name}><Typeh6>{d.name}</Typeh6></Ahref>
            <Typeh6>{d.deadline}</Typeh6>
            <Typep>{d.information}</Typep>
            
              

      <Googlepay idparol={d.idparol}/>
              
            
  
        </TypeCard>
        
        ))}
          </TypeCards>
          </Container1>
        </About>
        
        <About>
          <Container1>
          <Abouth1>
            How much our pupils have IELTS +7
          </Abouth1>
          <BarChart/>
          </Container1>
        </About>
        <About>
          <Container1>
          <Abouth1>
            Our Location
          </Abouth1>
          <AboutDiv>
          <AboutP>
            <AboutName>Learning Center</AboutName> In addition we have a learning centre which name is Academia. This learning centre have a very nice teachers and mentors. And there you can learn IT,arabic,russian,chemistry.
          </AboutP>
          <MapComponent/>
          </AboutDiv>
          </Container1>
        </About>
          <FOOTER/>
        </Container>

    )
 }

 export default Header