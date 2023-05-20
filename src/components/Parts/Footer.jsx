import React from "react";
import styled from "styled-components";
import Animation from "../Pages/Animation";

const Div = styled("div")`
  height: 400px;
padding-top:20px;
`
    const Footer = styled("footer")`
    
 
 background-color: #33a7ef;
 `
const FooterItem = styled("ul")`
  
  
  text-decoration: none;
  
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
const FooterContainer = styled("div")`
width: 1100px;
  display:flex;
justify-content: space-between;
padding: 100px 0 50px 0;
margin: 0 auto;

`
const FooterH1 = styled("h1")`

   
    font-style: 80px;
    font-family: 'Lobster', cursive;
    color: #001499;
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
 const FOOTER = (idOne,idTwo,idThree) =>{
    return(
        <Footer>
          
        <FooterContainer>
            <FooterItem>
              <Navlink> <Ahref href="/"><FooterH1>Academia</FooterH1></Ahref> </Navlink>
              <Navlink><Ahref href="">Telegram:</Ahref></Navlink>
              <Navlink><Ahref href="">@AskFromOlimjon</Ahref></Navlink>
              {/* <Navlink><Ahref href="">sxsxs</Ahref></Navlink> */}
              
            </FooterItem>
            <FooterItem>
              <Navlink><h3>Our Servises</h3></Navlink>
              <Navlink><Ahref href={`#Types`}>Types</Ahref></Navlink>
              <Navlink><Ahref href={`#yetti`}>IELTS +7</Ahref></Navlink>
              <Navlink><Ahref href={`#location`}>Location</Ahref></Navlink>
              
            </FooterItem>
            <FooterItem>
              <Navlink><h3>Chanels</h3></Navlink>
              <Navlink><Ahref href="https://www.youtube.com/@CODDYSchool" target="_blank">You Tube</Ahref></Navlink>
              <Navlink><Ahref href="https://www.instagram.com/coddycamp_it_akademiya/" target="_blank">Instagram</Ahref></Navlink>
              <Navlink><Ahref href="https://www.facebook.com/coddycamp" target="_blank">Facebook</Ahref></Navlink>
              
            </FooterItem>
            
        </FooterContainer>
          </Footer>
    )
}
export default FOOTER