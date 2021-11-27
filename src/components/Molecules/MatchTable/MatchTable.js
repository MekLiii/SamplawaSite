import React from "react";
import MatchTableEl from "./MatchTableEl";
import "./matchTable.module.css";

function MatchTable() {
  const data = [
    {
      druzyna: "Wadowice",
      mecze: 1,
      zwyciestwa: 1,
      przegrane: 1,
      remisy: 1,
      bramki: 15,
    },
    {
      druzyna: "Lubawa",
      mecze: 1,
      zwyciestwa: 3,
      przegrane: 2,
      remisy: 1,
      bramki: 15,
    },
    {
      druzyna: "Sampława",
      mecze: 1,
      zwyciestwa: 5,
      przegrane: 1,
      remisy: 0,
      bramki: 15,
    },
  ];
  console.log(data.map((el) => el));
  return (
    <div style={cointainer}>
      <div style={heading}>
        <h1>Tabela</h1>
        <table className="matchTable">
          <tbody>
          <tr style={{ border: "3px solid black" }}>
            <td>pozycja</td>
            <td>druzyna</td>
            <td>M</td>
            <td>Pkt</td>
            <td>Z</td>
            <td>R</td>
            <td>P</td>
            <td>Bramki</td>
          </tr>
          {data.map((el) => (
            <MatchTableEl
              druzyna={el.druzyna}
              mecze={el.mecze}
              pkt={el.zwyciestwa * 3 + el.remisy}
              zwyciestwa={el.zwyciestwa}
              przegrane={el.przegrane}
              remisy={el.remisy}
              bramki={el.bramki}
              key={el.druzyna}
            />
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const cointainer = {
  width: "90%",
  minHeight: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "10px",
};
const heading = {
  width: "100%",
  minHeight: "100px",
  backgroundColor: "#fed053",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

export default MatchTable;
