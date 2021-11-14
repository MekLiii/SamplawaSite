import React from "react";
import data from "../../../../content/druzyna.json";
import TableElement from "../../Atoms/TableElement";
import './table.module.css'

function Table({ role }) {
  console.log(data.team);
  const team = data.team;
  return (
    <div>
      <section>
        <p>{role}</p>
      </section>
      <table style={{border: '3px solid black', padding:'5px'}}>
        <tr>
          <td>#</td> <td>Zawodnik</td> <td>Pozycja</td> <td>Bramki</td>{" "}
          <td>Asysty</td> <td>Żółte kartki</td> <td>Czerwone Kartki</td>{" "}
          <td>Mecze</td>
        </tr>
        {team.map((element) => (
          <TableElement
            numer={element.numer}
            name={element.name}
            pozycja={element.position}
            bramki={element.bramki}
            asysty={element.asysty}
            zKartki={element.zKartki}
            cKartki={element.cKartki}
            mecze={element.mecze}
            style={{border: '3px solid black'}}
          />
        ))}
      </table>
    </div>
  );
}

export default Table;
