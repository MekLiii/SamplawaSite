import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../../../../content/tabelaSenior.json";

export default function DenseTable() {
  const dataAtom = data.Tabela.sort((a, b) => {
    return a.punkty - b.punkty;
  });
  const dataEl = dataAtom.reverse();
  return (
    <TableContainer
      component={Paper}
      style={{
        overflowX: "hidden",
        height: "100%",
        borderRadius: "0px",
        maxWidth: "100%",
      }}
    >
      <Table
        sx={{ minWidth: 150 }}
        size="small"
        aria-label="a dense table"
        style={{ height: "100%" }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="right" width="30px">
              Pozycja
            </TableCell>
            <TableCell align="left">Drużyna</TableCell>
            <TableCell align="right">Mecze</TableCell>
            <TableCell align="right">Punkty</TableCell>
            <TableCell align="right">Bramki</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataEl.map((el) => (
            <TableRow key={el.druzyna}>
              <TableCell component="th" scope="row">
                {dataEl.indexOf(el) + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {el.druzyna}
              </TableCell>
              <TableCell align="right">{el.mecze}</TableCell>
              <TableCell align="right">{el.punkty}</TableCell>
              <TableCell align="right">{el.bramki}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
