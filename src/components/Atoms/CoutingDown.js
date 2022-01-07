import React from "react";
import DateCountdown from "react-date-countdown-timer";
import styled from "styled-components";
import './app.css'

function CoutingDown() {
    
    
  return (
    <Box>
        <P>Na boisku widzimy się za:</P>
      <DateCountdown dateTo="04/12/2022" callback={() => alert("Hello")} style={{fontSize:'clamp(12px,2vw,30px)',color:'white',fontFamily:'poppins'}} />
    </Box>
  );
}
const Box = styled.div`
  width: 100%;
  height: 10vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-around;
  @media (max-width: 800px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  
 
`;
const P = styled.p`
    font-size: clamp(20px, 3vw, 50px);
    color:white;
    font-family: poppins;
`
export default CoutingDown;
