import React from "react";
import WProps from "../Parts/WritingProps";
import one from "./images/one.mp4"
import two from "./images/two.mp4"
import three from "./images/three.mp4"
import four from "./images/four.mp4"
import five from "./images/five.mp4"
import six from "./images/six.mp4"
import seven from "./images/seven.mp4"
import eight from "./images/eight.mp4"
import nine from "./images/nine.mp4"
import ten from "./images/ten.mp4"
import eleven from "./images/eleven.mp4"
import twelve from "./images/twelve.mp4"
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