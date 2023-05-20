import styled from "styled-components";
import React from "react";


const Div = styled("div")`
    margin: 6rem 0;
`
const DIv = styled("div")`
margin-top: 5rem;
    display: flex;
    justify-content: space-around;
`
const Img = styled("img")`
    width: 600px;
    height: 350px;
    border-radius: 10% 0 10% 0;
    box-shadow: 0px 1px 30px rgb(0, 0, 0 );
`
const IMg = styled("img")`
    width: 350px;
    height: 350px;
    box-shadow: 0px 1px 30px aqua;
`
const ContainerH1 = styled("h1")`
margin: auto 0;
margin-left: 5rem;
margin-right:1rem;
/* font-style: 20px; */
font-family: 'Lobster', cursive;
color: #001499;
width: 500px;
text-align: start;
`
const P = styled("p")`
margin-top: 20px;
font-size: 20px;
width: 500px;

    margin-left: 5rem;
`

const About = () =>{
    return(
        <Div>
            <DIv>
                 <div>
            <ContainerH1>With us you can learn english more fast than you learn yourself !</ContainerH1>
            <P>
                Firstly Web Site have materials of the most mentors in the world. Secondly cheap price,you can buy all our materials for almost nothing.
                Lastly you can link with our channels in You Tube , FaceBook , Instagram.
                 </P>
                 </div>
                    <Img src="https://avatars.dzeninfra.ru/get-zen_doc/3950500/pub_5f7c62a671c44f0829f2a0ce_5f7c6333952c3b370e862403/scale_1200" alt="" />
            </DIv>
            <DIv>
                <Img src="https://cdn6.aptoide.com/imgs/1/0/4/104db1d6d4b315b3eeac40cc9a32de47_fgraphic.png" alt="" />
                <div>
                    <ContainerH1>Our Web site</ContainerH1>
                    <P>For Uzbeks.But if you speak in other language don't worry ! You Can learn all types without Writing.Firsty listenings are in English and you just complete tasks.Secondly Speaking from YouTuber,we wrote information about him in the bottom.Lastly all of Readings from vk.com and all it in English.  </P>
                </div>
            </DIv>
            <DIv>
                <div>
                    <ContainerH1>English Speaking Success</ContainerH1>
                    <P>He is the popular You Tuber that have 2,67 million subscribers. English Speaking Success is designed to help you...
Speak better English
Give better answers and
Get a higher score on the IELTS Speaking test
It has IELTS Speaking TIPS, RESOURCES, LESSONS and 
Sample answers.
It is run by me, Keith O'Hare, owner of the Keith Speaking Academy.
I have no affiliation, connection, approval or endorsement from the British Council or any of the official IELTS partners.
Find out more about my work below.
https://keithspeakingacademy.com</P>
                </div>
                <IMg src="https://avatars.mds.yandex.net/get-entity_search/6244532/648451503/S122x122_2x" alt="" />
            </DIv>
        </Div>
    )
}

export default About