import React from "react";
import styled from "styled-components";

function ProductCard({name,price,img,onMouseOver,}) {
  return (
    <Card onMouseOver={onMouseOver}>
      <Box>
        <Img src={`${img}`} alt={img}/>
        <P style={{color: 'white'}}>{name}</P>
        <P style={{color: 'rgb(151, 151, 151)'}}>{price}</P>
      </Box>
    </Card>
  );
}
const Card = styled.div`
  min-height: 300px;
  height:auto;
  width:auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1d;
  border:10px solid #2b2b2b;
  

`;
const Box = styled.div`
  width: 90%;
  height: 90%;
  background-color:#1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Img = styled.img`
    width: 100%;
    height:70%;
    margin-top:10px;
`
const P = styled.p`
    font-size:1.5rem;
    
`
export default ProductCard;
