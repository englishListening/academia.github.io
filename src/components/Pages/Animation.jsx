import styled from "styled-components";
import LOMO from "./images/clock.png"
const Clock = styled("div")`
    position: relative;
    top: 1%;
    left: 1%;
    transform: translate(-50,-50);
    width: 400px;
    height: 400px;
    border: 15px solid #ff5f5f;
    border-radius: 50%;
    background-size:cover;
    box-shadow: -2px 2px 0 #e23232,inset 0 0 20px rgba(0,0,0,0.5);
    background-image:url(${LOMO}) ;
    margin-top: 90px;
    &::before{
        content: "";
        position: absolute;
    top:calc(50% - 3px);
    left: 50%;
    width: 40%;
    height: 6px;
    background: #262626 ;
    border-radius: 3px;
    animation: animate 4s linear infinite;
    transform-origin: left;
    }
    &::after{
        content: "";
        position: absolute;
    top:calc(50% - 3px);
    left: 50%;
    width: 30%;
    height: 6px;
    background: #262626;
    border-radius: 3px;
    animation: animate 48s linear infinite;
    transform-origin: left;
    }
    span{
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 10px;
        height: 10px;
        background: #ff5f5f;
        border-radius: 50%;
        z-index: 1;
    }
    @keyframes animate {
        0%{
            transform: rotate(-90deg);
        }
        100%{
            transform: rotate(270deg);
        }
    }
`


const Animation = () =>{
    return(
        <Clock>
            <span></span>
            
        </Clock>
    )
}

export default Animation