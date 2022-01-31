import React from "react";
import styled from "styled-components";

function SponsorEl({ img, name }) {
  return (
    <div style={flex}>
      <StyledImg>
        <img src={img} alt="Logo sponsora" style={imgStyle} />
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
  width: "100%",
};
const StyledImg = styled.div`
  width: 100%;
  height: auto;
  ${"" /* background-color:pink; */}
  display: flex;
  justify-content: center;
  align-items: center;
`;
const imgStyle = {
  width: "250px",
  // height:'50px',
};

export default SponsorEl;
