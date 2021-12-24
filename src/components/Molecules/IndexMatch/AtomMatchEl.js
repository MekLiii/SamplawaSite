import React from "react";
import styled from "styled-components";

function AtomMatchEl({letters, name,score,style}) {
  return(
    <Box style={style}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '70%'}}>
            <p style={{color:"#ffe600", fontSize:"clamp(20px,5vw,48px)", fontFamily:"Poppins",fontWeight:400}}>{letters}</p>
            <p style={{color:"#dedede", fontSize:"14px", fontFamily:"roboto",fontWeight:400}}>{name}</p>
        </div>
        <div style={{display:"flex", justifyContent: 'center', alignItems: 'center', width: '30%'}}>
            <p style={{color:"#e4e4e4", fontFamily:"poppins",fontSize:"clamp(40px,5vw,70px)",fontWeight:400}}>{score}</p>
        </div>
    </Box>
  )
}
const Box = styled.div`
width: 45%;
height:100%;
display:flex;
`;

export default AtomMatchEl;
