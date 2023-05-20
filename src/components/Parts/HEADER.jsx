import React from "react";
import styled from "styled-components";
import {NavItem,Nav,NavLink,Button} from 'reactstrap';
import teacher from "./photos/teacher.png"

    const Container = styled("div")`
    
    margin: 0 auto;
    text-align: center;
  `
    const Container1 = styled("div")`
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    `
  const Header = styled("div")`
     background: linear-gradient(110deg, #33a7ef 50%, rgba(238, 85, 20, 0) 0);
      height: 700px;
      margin-left: -1rem;
      animation: span 2s ease-out ;

    @keyframes span {
      0%{
        margin-left: -100rem;
      }
      99%{
        margin-left: -10rem;
      }
      100%{
        margin-left: -1rem;
      }
    }
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
 const Navitem = styled("ul")`
  display: flex;
  align-items: center;
  text-decoration: none;
  `
 const Navlink = styled("li")`
 text-decoration: none;
 list-style: none;
 text-align: center;
 display: flex;
 align-items: center;
 color:#001499;
 margin: auto 1rem;
 &:hover{
   cursor: pointer;
   transition:.5s;
   color: red;
  }
  `
  const Ahref = styled("a")`

  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  font-size: 20px;
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
  const HEADER = () =>{
    return(
    
         <Container>
        <Header>
          <NavBar>
            <NavLittle>
         <Nav
>
  <NavItem>
    <Ahref href="/">

    <ContainerH1>Academia</ContainerH1>
    </Ahref>
    {/* <Logo src={logo} alt="" /> */}
  </NavItem>
  <Navitem>
    <Navlink
      active
      href="/Listening"
    >
      <Ahref href="Listening">Listening</Ahref>
    </Navlink>
      <Navlink href="#">
      <Ahref href="Reading">Reading</Ahref>
    </Navlink>
    <Navlink href="#">
    <Ahref href="Speaking">Speaking</Ahref>
    </Navlink>
    <Navlink href="#">
    <Ahref href="Writing">Writing</Ahref>
    </Navlink>
    <Navlink href="#">
    <Ahref href="About">About Us</Ahref>
    </Navlink>
  </Navitem>
  
</Nav>
</NavLittle>
<NavButton>

  <Button
    color="primary"
    href="/signUp"
    tag="a"
  >
    Sign Up
  </Button>
  
</NavButton>
</NavBar>
<English>
  <EnglishDiv>
    <EnglishH1>Learn Engish with us</EnglishH1>
    <Englishp>With this web site you can do IELTS Listening,Reading,Speaking</Englishp>
    <Englishp>Make your Future here!</Englishp>
  </EnglishDiv>
  <EnglishImg src={teacher} alt="" />
</English>
        </Header>
        </Container>
    )
}

export default HEADER