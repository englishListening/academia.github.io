import React from "react";
import styled from "styled-components";
import Audio from "./Video.mp4"
import HEADER from "../Parts/HEADER";
import { useState,useEffect } from "react";
import { collection,getDocs } from "firebase/firestore";
import { deepCopy } from "@firebase/util";
import { db,storage } from "../config";
import FOOTER from "../Parts/Footer";
import Props from "../Parts/ListiningProps";
const Container1 = styled("div")`
      margin: 3rem auto;
      max-width: 1100px;
      `
 const Abouth1 = styled("h1")`
 font-size: 50px;
 text-align: center;
 transition: 2s;
 color: #33a7ef;
 font-family: 'Pacifico', cursive;
 margin-bottom: 3rem;
 `

const Listening = ()=>{

    const [AUDIO,setAudio] = useState([])
    const MusicAudio = collection(db,"Listening")
    useEffect(()=>{
      const getAudio = async () =>{
        const data = await getDocs(MusicAudio)
        setAudio(data.docs.map((doc)=>({...doc.data(),id: deepCopy.id})))
      };
      getAudio()
    },[])
   return(
   
    <div>
      <HEADER/>
      <Container1>
        <Abouth1>Listening Tasks</Abouth1>
      {AUDIO.map((d)=>(
        <div>
         
          <Props audio={Audio} days={d.days}/>
          </div>
      ))}

      </Container1>
      <FOOTER/>
    </div>
   )
}

export default Listening