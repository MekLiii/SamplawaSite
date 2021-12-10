import React from "react";
import styled from "styled-components";

function ProductCard({name,price,img}) {
  return (
    <Card>
      <Box>
        <Img src={img}/>
        <P>{name}</P>
        <P>{price}</P>
      </Box>
    </Card>
  );
}
const Card = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1d;
  border:15px solid #2b2b2b;

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
    height: 50%;
`
const P = styled.p`

`
export default ProductCard;
