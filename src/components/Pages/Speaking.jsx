import { deepCopy } from "@firebase/util";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { db } from "../config";
import FOOTER from "../Parts/Footer";
import HEADER from "../Parts/HEADER";

const Img = styled("img")`
    width: 500px;
    height: 300px;
`

const Div = styled("div")`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
`
const Abouth1 = styled("h1")`
 font-size: 50px;
 text-align: center;
 transition: 2s;
 color: #33a7ef;
 font-family: 'Pacifico', cursive;
 margin: 3rem 0;
 `
 const Iframe = styled("iframe")`
    margin-bottom: 23px;
 `
const Speaking = () =>{

    
    return(
        <div>
            <HEADER/>
            <Abouth1>Speaking</Abouth1>
           <Div>
           <Iframe width="360" height="200" src="https://www.youtube.com/embed/R1AFp1QfSaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube.com/embed/D6_qpaSxAQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube.com/embed/6eQgTJOt1ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube.com/embed/-6F1Guqx_h0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube.com/embed/7zaCPkgMhiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube.com/embed/B30RAx4ipRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube.com/embed/aupe37dTFPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube-nocookie.com/embed/F0F9x0XigNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube-nocookie.com/embed/q2ZBgqd3cOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube-nocookie.com/embed/DxfQFioD3SA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube-nocookie.com/embed/UzGeZwhrRpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube-nocookie.com/embed/H1em6OaGEYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube-nocookie.com/embed/0IuBs820Vvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube-nocookie.com/embed/ErXWy50FgXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube-nocookie.com/embed/9gpmxN5SlNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
           <Iframe width="360" height="200" src="https://www.youtube-nocookie.com/embed/0A4sjPj0LZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>

           </Div>
           <FOOTER/>
                 </div>
    )
}

export default Speaking