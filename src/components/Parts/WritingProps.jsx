import React from "react";
import styled from "styled-components";

const Video = styled("video")`
    width: 360px;
    height: 200px;
    margin: 23px 0;
`
const WProps = (props) => {
    return(
        <Video controls src={props.video}></Video>
    )
}

export default WProps