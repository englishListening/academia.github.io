// import { defaults } from "chart.js";
import React from "react";
import styled from "styled-components";
import { useState,useEffect } from "react";
import { collection,getDocs } from "firebase/firestore";
import { deepCopy } from "@firebase/util";
import { db } from "../config";
import HEADER from "../Parts/HEADER";
import FOOTER from "../Parts/Footer";
import ReadingProps from "../ReadingProps";
const Abouth1 = styled("h1")`
 font-size: 50px;
 text-align: center;
 transition: 2s;
 color: #33a7ef;
 font-family: 'Pacifico', cursive;
 margin: 3rem 0;
 `
 const KingDiv = styled("div")`
 width: 100%;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
`
const Reading = () =>{
    const [read,setRead] = useState([])
    const ReadIng = collection(db,"Reading")

    useEffect(()=>{
        const getRead = async () =>{
            const data = await getDocs(ReadIng)
            setRead(data.docs.map((doc)=>({...doc.data(),id: deepCopy.id})))

        }
        getRead()
    },[])
    return(
        <div>
            <HEADER/>
       
        <Abouth1>Reading
        
        </Abouth1>
        <KingDiv>
        {read.map((d)=>(
        <ReadingProps img={d.imgbooks} Url={d.UrlBooks} name={d.name} info={d.info}/>
        
        ))}
        </KingDiv>
         <FOOTER/>
        </div>
    )
}

export default Reading