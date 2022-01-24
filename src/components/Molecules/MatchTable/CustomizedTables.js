import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../../../../content/tabelaSenior.json";
import "./matchTable.module.css";
import styled from "styled-components";
import { People, Flag, Football, Podium, Ellipse } from "react-ionicons";

export default function DenseTable() {
  const dataAtom = data.Tabela.sort((a, b) => {
    return a.punkty - b.punkty;
  });
  const dataEl = dataAtom.reverse();
  return (
    <Box>
      <TableContainer
        component={Paper}
        style={{
          overflow: "hidden",
          height: "100%",
          borderRadius: "0px",
          backgroundColor: "rgba(255,255,255,0)",
          width: "100%",
          // margin: "10px",
        }}
        className={`TableContainer`}
        id="TableContainer"
      >
        <Table
          sx={{ minWidth: "100%", overflow: "hidden" }}
          size="small"
          aria-label="a dense table"
          style={{ height: "100%" }}
        >
          <TableHead style={{ backgroundColor: "#ffe600" }}>
            <TableRow>
              <TableCell
                align="right"
                width="30px"
                sx={{ textAlign: "center", borderBottom: 0 }}
              >
                <Centered>
                  <Icon>
                    <Flag color={"#ffe600"} height="20px" width="20px" />
                  </Icon>
                  <P>Pozycja</P>
                </Centered>
              </TableCell>
              <TableCell
                align="center"
                sx={{ textAlign: "center", borderBottom: 0 }}
              >
                <Centered>
                  <Icon>
                    <People color={"#ffe600"} height="20px" width="20px" />
                  </Icon>
                  <P>Drużyna</P>
                </Centered>
              </TableCell>

              <TableCell
                align="center"
                sx={{ textAlign: "center", borderBottom: 0 }}
              >
                <Centered>
                  <Icon>
                    <Podium color={"#ffe600"} height="20px" width="20px" />
                  </Icon>
                  <P>Punkty</P>
                </Centered>
              </TableCell>
              <TableCell
                align="center"
                sx={{ textAlign: "center", borderBottom: 0 }}
              >
                <Centered>
                  <Icon>
                    <Football color={"#ffe600"} height="20px" width="20px" />
                  </Icon>
                  <P>Mecze</P>
                </Centered>
              </TableCell>

              <TableCell
                align="center"
                sx={{ textAlign: "center", borderBottom: 0 }}
              >
                <Centered>
                  <Icon>
                    <Ellipse color={"#ffe600"} height="20px" width="20px" />
                  </Icon>
                  <P>Bramki</P>
                </Centered>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody id="tbody">
            {dataEl.map((el) => (
              <TableRow
                key={el.druzyna}
                style={
                  el.druzyna === "PFT Sampława"
                    ? { backgroundColor: "#292929" }
                    : { backgroundColor: "rgba(0,0,0,.1)" }
                }
              >
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  style={{
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {dataEl.indexOf(el) + 1}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  style={{
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {el.druzyna}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {el.punkty}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    padding: "10px",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  {el.mecze}
                </TableCell>

                <TableCell
                  align="center"
                  style={{
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    // padding: "3px 10px",
                    padding: "10px",
                    width: "100%",
                    boxSizing: "border-box",
                    // height: "100%"
                  }}
                >
                  {el.bramki}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
const Box = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1120px) {
    width: 80%;
  }
  @media (max-width: 740px) {
    width: 100%;
  }
`;
const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const P = styled.p`
  margin-bottom: 0;
`;
const IconItem = styled.div`
  width: 40px;
  height: 40px
  background-color:black;
  border-radius:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 735px) {
    width: 100%;
  }
`;
const Icon = ({ children }) => {
  return (
    <IconItem
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "black",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </IconItem>
  );
};
const MobileColum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

const iconStyle = {
  color: "#FFE600",
  fontSize: "20px",
};
