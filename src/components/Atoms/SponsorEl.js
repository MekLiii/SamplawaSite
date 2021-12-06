import React from "react";
import styled from "styled-components";

function SponsorEl({ img, name }) {
  return (
    <div style={flex}>
      <StyledImg>
        <img src={img} alt="Logo sponsora" style={imgStyle}/>
      </StyledImg>
      <p style={{ color: "black" }}>{name}</p>
    </div>
  );
}
const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const StyledImg = styled.div`
  width: 350px;
  height:250px;
  ${'' /* background-color:pink; */}
  display: flex;
  justify-content: center;
  align-items: center;
`;
const imgStyle = {
    width:'250px',
    // height:'50px',
}

export default SponsorEl;
