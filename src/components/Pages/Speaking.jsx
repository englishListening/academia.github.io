import { deepCopy } from "@firebase/util";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { db } from "../config";

const Img = styled("img")`
    width: 500px;
    height: 300px;
`

const Speaking = () =>{
    const [speaking,setSpeaking] = useState([])
    const Speakingbase = collection(db,"Speaking")

    useEffect(()=>{
        const getSpeaking = async ()=>{
            const data = await getDocs(Speakingbase)
            setSpeaking(data.docs.map((doc)=>({...doc.data(),id: deepCopy.id})))
        }
        getSpeaking()
    },[])
    return(
        <div style={{display:"flex",flexWrap:"wrap"}}>
            <h1>Speaking</h1>
            {speaking.map((d) =>(
                <div>
                    <Img src={d.img} alt="" />
                </div>
              
            ))}
                 </div>
    )
}

export default Speaking