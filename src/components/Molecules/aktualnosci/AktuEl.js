import React from "react";
import styled from "styled-components";
import "./aktu.module.css";
import { ArrowForward } from "react-ionicons";

function AktuEl({ img, heading, whatNext, data, onClick }) {
  const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

  let array = data.split("-");
  const element = parseInt(array[1]);
  const newElement = months[element - 1];
  array[1] = newElement;
  return (
    <StyledBox>
      <div style={leftSide}>
        <div style={imagine}>
          <img src={img} style={imagine} alt={img} />
        </div>
      </div>
      <div style={rightSide}>
        <div
          style={{
            width: "20%",
            height: "auto",
            padding: "5px",
            display: "flex",
            flexDirection: "column",
            borderRight:"2px solid black",
          }}
        >
          <p
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
              marginBottom: "0",
            }}
          >
            {array[0]}
          </p>
          <p
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
              marginBottom: "0",
            }}
          >
            {array[1]}
          </p>
          <p
            style={{
              fontFamily: "poppins",
              fontSize: "15px",
              marginBottom: "0",
            }}
          >
            {array[2]}
          </p>
        </div>
        <div
          style={{
            width: "60%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              fontFamily: "roboto",
              fontWeight: 400,
              textAlign: "center",
              marginBottom:0,
            }}
          >
            {heading}
          </p>
        </div>
        {/* <Button onClick={onClick}>{whatNext}</Button> */}
        <div style={{ width: "20%",display: "flex",justifyContent: "center", alignItems: "center"}}>
          <ArrowForward onClick={onClick} color={"black"} height="30px" width="30px" />
        </div>
      </div>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  height: 321px;
  width: 379px;
  ${"" /* max-width: 350px; */}
  display: flex;
  flex-direction: column;
`;
// const Button = styled.button`
//   width: 150px;
//   height: 50px;
//   background-color: black;
//   color: white;
//   border: none;
//   -webkit-box-shadow: 0px 0px 100px -49px rgba(66, 68, 90, 1);
//   -moz-box-shadow: 0px 0px 100px -49px rgba(66, 68, 90, 1);
//   box-shadow: 0px 0px 100px -49px rgba(66, 68, 90, 1);
// `;

const leftSide = {
  display: "flex",
  width: "100%",
  flex: "1",
};
const rightSide = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#ffe600",
  height: "82px",
  width: "100%",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px",
};
const imagine = {
  width: "100%",
  height: "100%",
  backgroundColor: "black",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
};

export default AktuEl;
