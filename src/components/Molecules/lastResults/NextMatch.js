import React, { useState } from "react";
import styled from "styled-components";
import img from "../../../images/soccer.png";
import { Time } from "react-ionicons";
import mecz from "../../../../content/mecz.json";


function NextMatch() {
  const match = mecz.mecz

  const matchArray =[]

  const matchs = match.map((el) =>(
    matchArray.push(el.data)
    
  ))
  
  matchArray.sort(function(a,b) {
    a = a.split('/').reverse().join('');
    b = b.split('/').reverse().join('');
    return a > b ? 1 : a < b ? -1 : 0;
    
    // return a.localeCompare(b);         // <-- alternative 
    
  });
  const today = new Date();
  const currentDat = (today.getDate() > '9') ? today.getDate() : '0'+today.getDate();
  

  const currentDate = (today.getMonth()+1)+'/'+ currentDat+'/'+today.getFullYear();
  console.log(currentDate);
 
  const result = match.find(({data}) => data >= currentDate);
  
  

  console.log(matchArray)
  console.log(result)
  
  return (
    <StyledDiv>
      <div style={displayFlex}>
        <h1 style={{ color:'white'}}>Następny mecz</h1>
      </div>
      <div style={versusDiv}>
        <P>{result.gospodarze}</P>
        <P>-:-</P>
        <P>{result.goscie}</P>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <P>
          {result.miejsce}
        </P>
        <P>
        <Time
            color={"white"}
            height="40px"
            width="40px"
          />
          {/* zmienic format na europejski!!!!!!!!!!!! */}
          {result.data}
        </P>
        <P>
         
          B klasa
        </P>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  height: 40%;
`;
const versusDiv = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "row",
  width: "100%",
};
const displayFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const StyledImg = styled.img`
  width: 40px;
`;
const P = styled.p`
  color:white
`

export default NextMatch;
