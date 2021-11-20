import React from "react";

function TableElement({
  numer,
  name,
  pozycja,
  bramki,
  asysty,
  zKartki,
  cKartki,
  mecze,
  style,
}) {
  return (
    <tr style={styles}>
      <td style={styles}>{numer}</td> <td style={styles}>{name}</td>{" "}
      <td style={styles}>{pozycja}</td> <td style={styles}>{bramki}</td> <td style={styles}>{asysty}</td>{" "}
      <td style={styles}>{zKartki}</td> <td style={styles}>{cKartki}</td> <td style={styles}>{mecze}</td>
    </tr>
  );
}

export default TableElement;

const styles = {
  border: "1px solid grey",
  textAlign: 'center',
  color: "#ebebeb"
};
