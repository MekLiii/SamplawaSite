import React from "react";
import data from "../../../../content/druzyna.json";
import TableElement from "../../Atoms/TableElement";
import "./table.module.css";
import TableHero from "./TableHero";
import styled from "styled-components";
import { PersonCircleOutline } from "react-ionicons";
// import chuj from '../../../../static/players/'

function Table({data}) {
  const team = data?.team;
  const image = data?.zdjecia?.substr(8);

  return (
    <div style={mainCoinainer}>
      <div style={heading}>
        <h1 style={{ color: "white" }}>Zawodnicy</h1>
      </div>
      <GridHolder>
        {data?.map((el) => (
          <TableHero pozycja={el.pozycja} name={el.name} key={el.name} img={`/${el.zdjecia?.slice(8)}`}/>
        ))}
      </GridHolder>
    </div>
  );
}
const heading = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "7vh",
};
const mainCoinainer = {
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const GridHolder = styled.div`
  display: inline-grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  height: auto;
  gap: 10px;
  row-gap: 2.5em;
  width: 90%;
  margin-bottom: 50px;
  place-items:  center;

  @media (max-width: 500px) {
    
  }
`;

export default Table;
