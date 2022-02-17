import React from "react";
import styled from "styled-components";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Zoom";
import mecz from '../../../content/mecz.json'

function Shotters({ src, goals, name, height }) {
  
  if(src === undefined){
    return(
      <Fade bottom>
      <Box style={{ height: `${height}` }}>
        <Arrow>
          <FontAwesomeIcon
            icon={faAngleDoubleUp}
            style={{}}
            size="2x"
            color="black"
          />
        </Arrow>
        <Flag>
          <P>{goals}</P>
        </Flag>
        <Img src={src} />

        <Hopper>
          <P>{name}</P>
          <P style={{fontSize:"15px"}}>Strzelone bramki w sezonie {mecz.AktualnySezon}</P>
          <P>{goals}</P>
        </Hopper>
      </Box>
    </Fade>
    )
  }else
  return (
    <Fade bottom>
      <Box style={{ height: `${height}` }}>
        <Arrow>
          <FontAwesomeIcon
            icon={faAngleDoubleUp}
            style={{}}
            size="2x"
            color="black"
          />
        </Arrow>
        <Flag>
          <P>{goals}</P>
        </Flag>
        <Img src={src} />

        <Hopper >
          <P>{name}</P>
          <P style={{fontSize:"15px"}}>Strzelone bramki w sezonie {mecz.AktualnySezon}</P>
          <P>{goals}</P>
        </Hopper>
      </Box>
    </Fade>
  );
}

const Hopper = styled.div`
  width: 100%;
  height: 30%;
  ${"" /* padding: 5% 8%; */}
  position: absolute;
  content: "";
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all 0.3s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Arrow = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  animation: MoveUpDown 1s linear infinite;
  opacity: 1;
  transition: all 0.3s ease-in;


@keyframes MoveUpDown {
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: 5px;
  }
}
`;
const Box = styled.div`
  width: 350px;
  height: 45vh;
  display: flex;
  flex-direction: column;
  perspective: 500px;
  &:hover ${Hopper} {
    height: 100%;
    transform: translate(0, 0);
    opacity: 1;
  }
  &:hover ${Arrow} {
    opacity: 0;
  }
  -webkit-box-shadow: 0px 0px 42px -14px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 42px -14px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 42px -14px rgba(66, 68, 90, 1);
  @media (max-width:1000px) {
    width:100%;
  }
`;
const Img = styled.img`
  width: auto;
  height: 100%;
  @media (max-width:400px) {
    width: 100%;
  }
`;
const P = styled.p`
  color: #ffe600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: poppins;
  font-size: 24px;
`;

const Flag = styled.div`
  background-color: black;
  height: 100px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(30% 0%, 70% 0%, 100% 0, 100% 100%, 50% 80%, 0 100%, 0 0);
  position: absolute;
  top: 0;
  left: 25px;
  @media (max-width:650px){

  }
`;
export default Shotters;
