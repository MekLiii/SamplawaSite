import React from "react";
import data from "../../../../content/druzyna.json";
import TableElement from "../../Atoms/TableElement";
import "./table.module.css";
import TableHero from "./TableHero";
import styled from "styled-components";
import { PersonCircleOutline } from "react-ionicons";

function Table() {
  const team = data.team;

  return (
    <div style={mainCoinainer}>
      <div style={heading}>
        <h1 style={{ color: "white" }}>Zawodnicy</h1>
      </div>
      <GridHolder>
        {team.map((el) => (
          <TableHero
            numer={el.numer}
            pozycja={el.pozycja}
            name={el.name}
            bramki={el.bramki}
            asysty={el.asysty}
            zKartki={el.zKartki}
            cKartki={el.cKartki}
            mecze={el.mecze}
            key={el.name}
          />
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
  justify-content: center;

  @media (max-width: 500px) {
    display: inline-grid;
    justify-content: center;
    align-items: center;
  }
`;

export default Table;

{
  /* <table style={{ border: "3px solid #fed053", padding: "5px" }}>
        <tr>
          <td>#numer</td> <td>Zawodnik</td> <td>Pozycja</td> <td>Bramki</td>{" "}
          <td>Asysty</td> <td>Żółte kartki</td> <td>Czerwone Kartki</td>{" "}
          <td>Mecze</td>
        </tr>
        {team.map((element) => (
          <TableElement
            numer={element.numer}
            name={element.name}
            pozycja={element.pozycja}
            bramki={element.bramki}
            asysty={element.asysty}
            zKartki={element.zKartki}
            cKartki={element.cKartki}
            mecze={element.mecze}
            key={element.numer}
            style={{
              border: "3px solid black",
            }}
          />
        ))}
      </table> */
}
