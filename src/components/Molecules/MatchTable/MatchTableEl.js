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
}) {
  return (
    <tr>
      <td>1</td>
      <td>{druzyna}</td>
      <td>{mecze}</td>
      <td>{pkt}</td>
      <td>{zwyciestwa}</td>
      <td>{przegrane}</td>
      <td>{remisy}</td>
      <td>{bramki}</td>
    </tr>
  );
}

export default MatchTableEl;
