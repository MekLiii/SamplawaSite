import React from "react";
import MatchTableEl from "./MatchTableEl";
import "./matchTable.module.css";
import styled from "styled-components";
import dataJson from "../../../../content/tabelaSenior.json";

function MatchTable() {

  const dataAtom = dataJson.Tabela.sort((a, b) => {
    return (
      (a.zwyciestwa - b.zwyciestwa) * 3 + (a.remisy - b.remisy)
    );
  });
  const data = dataAtom.reverse();

  return (
    <div style={cointainer}>
      <div style={heading}>
        <h1>Tabela</h1>
        <StyledTable>
          <tbody>
            <tr>
              <td>pozycja</td>
              <td>druzyna</td>
              <td>Pkt</td>
              <td>M</td>
              <td>Z</td>
              <td>R</td>
              <td>P</td>
              <td>Bramki</td>
            </tr>
            {data.map((el) => (
              <MatchTableEl
                pozycja={data.indexOf(el) + 1}
                druzyna={el.druzyna}
                mecze={el.mecze}
                pkt={el.zwyciestwa * 3 + el.remisy}
                zwyciestwa={el.zwyciestwa}
                przegrane={el.porazki}
                remisy={el.remisy}
                bramki={el.bramki}
                key={el.druzyna}
              />
            ))}
          </tbody>
        </StyledTable>
      </div>
    </div>
  );
}

const StyledTable = styled.table`
  border: 3px solid black;
  width: 90%;
  
`;

const cointainer = {
  width: "90%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  
};
const heading = {
  width: "100%",
  minHeight: "100px",
  backgroundColor: "#fed053",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingBottom: '50px',
  margin: '10px'
};

export default MatchTable;
