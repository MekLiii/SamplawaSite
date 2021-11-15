import React from "react";
import data from "../../../../content/druzyna.json";
import TableElement from "../../Atoms/TableElement";
import "./table.module.css";

function Table({ role }) {
  console.log(data.team);
  const team = data.team;
  return (
    <div>
      <div style={heading}>
       <h1>Zawodnicy</h1>
      </div>
      <table style={{ border: "3px solid black", padding: "5px" }}>
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
            style={{
              border: "3px solid black",
            }}
          />
        ))}
      </table>
    </div>
  );
}
const heading = {
  backgroundColor: '#fed053',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '7vh',
  
}

export default Table;
