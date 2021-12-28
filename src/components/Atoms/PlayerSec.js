import React from "react";
import styled from "styled-components";
import { TabletPortrait } from "react-ionicons";


function PlayerSec({ minuts, src, name,color,StyleIcon }) {
  return (
    <PlayersHolder>
      <Bottom>
        <Img src={src} alt={src} />
        <span>{name}</span>
        <span>
          {minuts}' 
          <TabletPortrait color={color} style={StyleIcon}/>
        </span>
      </Bottom>
    </PlayersHolder>
  );
}
const PlayersHolder = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
   margin-top:10px;
   margin-bottom:10px;
  justify-content: center;
  align-items: center;
  
`;
const Top = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Bottom = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  border:1px solid #ffe600;
  color:white;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/samplawa-e85f7.appspot.com/o/bg-pattran.png?alt=media&token=8d50b11b-d328-466e-81e8-333962ee63c8");
  @media (max-width: 768px) {
      width:90%;
  }
`;
const Img = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;
export default PlayerSec;
