import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import logo from '../../../content/assets/logo.webp'

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 121;
  display: none;
  
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "black" : "#ffe600")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const Box = styled.div`
display:none;
@media (max-width:768px){
  display: flex;
  width:100%;
  height:10vh;
  z-index: 121;
  position: fixed;
  background-color:rgba(0,0,0,0.7)
}
 
`
const Burger = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <>
    <Box>
    <img src={logo} alt={logo} style={{width: 'auto',margin:"3%"}}/>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div  />
        <div  />
        <div  />
      </StyledBurger>
      <RightNav open={open} close={()=> setOpen(false)}/>
      </Box>
    </>
  );
};

export default Burger;
