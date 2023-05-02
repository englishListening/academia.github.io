import React from "react";
import styled from "styled-components";



const ReadingImg = styled("img")`
    box-shadow: 0px 1px 30px #33a7ef67;
    border-radius: 10px;
    margin: 0 auto;
    width: 310px;
    height: 419px;
    /* margin-right: 30px; */
    background: #FFFFFF;
   
`
const ReadDiv = styled("div")`
    width: 390px;
    height: 419px;
    margin: 0 auto;
    margin: 20px auto;
    background-color: #33a7ef;
    border-radius: 10px;
    display: flex;
    .hh{
        display: none;
        margin-left: 15px;
        transition: 1s;
        animation: read 1s ease-in-out;
    }
    .readp{
            display: none;
            margin-left: 15px;
            animation: read 1s ease-in-out;

        }
        .dowload{
            display: none;
            text-align: center;
            padding: 4px;
            background-color: #33a7ef;
            border: 0px;
            border-radius: 3px;
            margin-left: 15px;
            animation:read 1s ease-in-out
        }
    &:hover{
        width: 693px;
        height: 419px;
        background-color: #33a7ef9d;
        .hh{
            display: block;
            animation: read 1s ease-in-out;
            transition: 1s;
        }
        .readp{
            display: block;
            width: 300px;
            font-size: 12px;
            margin-left:15px;
        }
        .dowload{
            display: block;
            margin-left: 15px;
        }
        transition: 1s;
        @keyframes read {
            0%{
                margin-left: -10px;
            }
            100%{
                margin-left: 15px;
            }
        }
    }
`

const Readhref = styled("a")`
    text-decoration: none;
    color: white;
`

const ReadingProps = (props)=>{
    return(
        

       
        

        <ReadDiv>

        <ReadingImg src={props.img} alt="" />
        <div>
        <h1 className="hh">{props.name}</h1>
        <p className="readp">{props.info}</p>
        <button className="dowload"><Readhref href={props.Url}>Dowload</Readhref></button>
        </div>
        </ReadDiv>

        
         
    )
}

export default ReadingProps