import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import AtomMatchEl from "./AtomMatchEl";

function MatchElIndex({ title,data,letters,name,score,lettersEnemy,nameEnemy,scoreEnemy,whatNext,link,sign }) {
  return (
    <Box>
      <Divider style={{height:"30%"}}>
        <Title>{title}</Title>
      </Divider>
      <Divider style={{height:"70%"}}>
            <BottomCointainer>
                <p style={{color: '#ffe600', fontSize:"clamp(10px,5vw,18px)", fontFamily:"Roboto"}}>{data}</p>
                <StatHolders>
                    <AtomMatchEl letters={letters} name={name} score={score}/>
                    <p style={{color:"#e4e4e4", fontFamily:"poppins", fontSize:"clamp(20px,5vw,70px)"}}>{sign}</p>
                    <AtomMatchEl letters={lettersEnemy} name={nameEnemy} score={scoreEnemy} style={{flexDirection: "row-reverse"}}/>
                </StatHolders>
                <div>
                <Link to={link}>
                    <div style={{backgroundColor:"#ffe600", minWidth:"146px",height:"46px",display:'grid',placeItems:"center", color:"black", borderRadius:"20px",padding:"0 10px"}}>
                    <span style={{color:"black", fontSize:"clamp(5px,5vw,13px)",fontWeight:600,fontFamily:"poppins"}}>{whatNext}</span>
                    </div>
                    </Link>
                </div>
            </BottomCointainer>
      </Divider>
    </Box>
  );
}
const Box = styled.div`
  height: 100%;
  @media (max-width:768px){
    ${'' /* margin-top:50px; */}
  }
`;
const Divider = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.p`
  font-size: 32px;
  color: white;
  font-family: "Poppins", sans-serif;
`;
const BottomCointainer = styled.div`
    width: 90%;
    height: 100%;
    background-color:black;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const StatHolders = styled.div`
    width: 100%;
    height:auto;
    display:flex;
    align-items: center;
    justify-content: space-around;
`

export default MatchElIndex;
