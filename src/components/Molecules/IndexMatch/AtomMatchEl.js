import React from "react";
import styled from "styled-components";

function AtomMatchEl({letters, name,score,style}) {
  return(
    <Box style={style}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '70%'}}>
            <p style={{color:"#ffe600", fontSize:"48px", fontFamily:"Poppins"}}>{letters}</p>
            <p style={{color:"#dedede", fontSize:"14px", fontFamily:"roboto"}}>{name}</p>
        </div>
        <div style={{display:"flex", justifyContent: 'center', alignItems: 'center', width: '30%'}}>
            <p style={{color:"#e4e4e4", fontFamily:"poppins", fontSize:"70px"}}>{score}</p>
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
