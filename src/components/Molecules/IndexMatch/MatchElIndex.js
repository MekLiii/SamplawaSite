import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import AtomMatchEl from "./AtomMatchEl";

function MatchElIndex({ title,data,letters,name,score,lettersEnemy,nameEnemy,scoreEnemy,whatNext,link,sign }) {
  return (
    <Box>
      <Divider>
        <Title>{title}</Title>
      </Divider>
      <Divider>
            <BottomCointainer>
                <p style={{color: '#ffe600', fontSize:"18px", fontFamily:"Roboto"}}>{data}</p>
                <StatHolders>
                    <AtomMatchEl letters={letters} name={name} score={score}/>
                    <p style={{color:"#e4e4e4", fontFamily:"poppins", fontSize:"70px"}}>{sign}</p>
                    <AtomMatchEl letters={lettersEnemy} name={nameEnemy} score={scoreEnemy} style={{flexDirection: "row-reverse"}}/>
                </StatHolders>
                <div>
                    <div style={{backgroundColor:"#ffe600", padding:"10px", color:"black", borderRadius:"20px"}}>
                        <Link style={{color:"black", fontSize:"13px"}} to={link}>{whatNext}</Link>
                        {/* <Link to={`/mecze/${result.gospodarze}-${result.przeciwnik}`}></Link> */}
                    </div>
                </div>
            </BottomCointainer>
      </Divider>
    </Box>
  );
}
const Box = styled.div`
  height: 100%;
`;
const Divider = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
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
    justify-content: center;
    align-items: center;
`
const StatHolders = styled.div`
    width: 100%;
    height:auto;
    display:flex;
`

export default MatchElIndex;
