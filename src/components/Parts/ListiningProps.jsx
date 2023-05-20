import React from "react";
import styled from "styled-components";
import Test from "./photos/Test.png"
import Script from "./photos/Script.png"
import Answer from "./photos/Answers.png"
import Podcast from "./photos/Podcast.png"
import Podcast2 from "./photos/Poscast2.png"
const AUDIO = styled("audio")`
    width: 500px;
    color: #33a7ef;
    box-shadow: #33a7ef;
`
const Typeh6 = styled("h6")`
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 150%;
color: #33a7ef;
font-family: 'Source Serif Pro';
`
const Ahref = styled("a")`
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 150%;
font-family: 'Source Serif Pro';
  text-decoration: none;
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  color:#33a7ef;
  &:hover{
    cursor: pointer;
    transition:.3s;
    color: red;
  }
  `
const GapImg = styled("img")`
     box-shadow: 0px 1px 30px #33a7ef;
    border-radius: 10px;
    width: 310px;
    height: 419px;
    /* margin-right: 30px; */
    background: #FFFFFF;
    margin-left: 15px;
    
`
const Answerimg = styled("img")`
    margin: 15px;
    box-shadow: 0px 1px 30px #33a7ef;
    border-radius: 10px;
    width: 625px;
`
const Display = styled("div")`
margin: 10px 0;
    display: flex;
    justify-content: space-around;
`

const Props = (props) =>{
    
    return(
        <div>
            <Typeh6>{props.days}</Typeh6>
            <Display>
            <div>
            <Typeh6>Gap Filling</Typeh6>
            <AUDIO controls src={props.audio}></AUDIO>
            <Display>
            <GapImg src={Test} alt="" />
            <GapImg src={Script} alt="" />

            </Display>
            <Answerimg src={Answer} alt="" />
            </div>
            <div>
            <Typeh6>Podcast</Typeh6>
            <AUDIO controls src={props.audio}></AUDIO>
            <Display>
            <GapImg src={Podcast} alt="" />
            <GapImg src={Podcast2} alt="" />

            </Display>
            
            </div>
            </Display>
            
        </div>
    )
}

export default Props