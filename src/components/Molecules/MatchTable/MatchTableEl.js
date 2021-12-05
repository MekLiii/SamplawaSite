import React from "react";
import "./matchTable.module.css";

function MatchTableEl({
  druzyna,
  mecze,
  pkt,
  zwyciestwa,
  przegrane,
  remisy,
  bramki,
  pozycja
}) {
  return (
    <tr>
      <td>{pozycja}</td>
      <td style={{textAlign: "left"}}>{druzyna}</td>
      <td>{pkt}</td>
      <td>{mecze}</td>
      <td>{zwyciestwa}</td>
      <td>{remisy}</td>
      <td>{przegrane}</td>
      <td>{bramki}</td>
    </tr>
  );
}

export default MatchTableEl;
