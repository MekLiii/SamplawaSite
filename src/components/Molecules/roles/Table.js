import React from "react";

function Table({ role }) {
  return (
    <div>
      <section>
        <p>{role}</p>
      </section>
      <table>
        <tr>
          <td>#</td> <td>Zawodnik</td> <td>Pozycja</td> <td>Bramki</td> <td>Asysty</td> <td>Żółte kartki</td> <td>Czerwone Kartki</td> <td>Mecze</td> 
        </tr>
        <tr>
          <td>4</td> <td>5</td> <td>6</td>
        </tr>
        <tr>
          <td>7</td> <td>8</td> <td>9</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
