import React from "react";
import WProps from "../Parts/WritingProps";
import one from "./one.mp4"
import two from "./two.mp4"
import three from "./three.mp4"
import four from "./four.mp4"
import five from "./five.mp4"
import six from "./six.mp4"
import seven from "./seven.mp4"
import eight from "./eight.mp4"
import nine from "./nine.mp4"
import ten from "./ten.mp4"
import eleven from "./eleven.mp4"
import twelve from "./twelve.mp4"
import styled from "styled-components";
import HEADER from "../Parts/HEADER";
import FOOTER from "../Parts/Footer";
const Abouth1 = styled("h1")`
 font-size: 50px;
 text-align: center;
 transition: 2s;
 color: #33a7ef;
 font-family: 'Pacifico', cursive;
 margin: 3rem 0;
 `
const Div = styled("div")`
        display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const Writing = () =>{

    return(
        <div>
            <HEADER/>
        <Abouth1>Writing</Abouth1>
        <Div>
            <WProps video={one}/>
            <WProps video={two}/>
            <WProps video={three}/>
            <WProps video={four}/>
            <WProps video={five}/>
            <WProps video={six}/>
            <WProps video={seven}/>
            <WProps video={eight}/>
            <WProps video={nine}/>
            <WProps video={ten}/>
            <WProps video={eleven}/>
            <WProps video={twelve}/>
        </Div>
        <FOOTER/>
        </div>

    )
}
export default Writing