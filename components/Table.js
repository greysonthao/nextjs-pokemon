import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function BasicTable(props) {
  return (
    <TableContainer
      component={Paper}
      xs={12}
      /* md={6} */
      sx={{
        justifyContent: "center",
        marginTop: 2,
      }}
    >
      <Table aria-label="simple table">
        <TableBody>
          {props.pokemon.stats.map((stat) => (
            <TableRow key={stat.name}>
              <TableCell>{stat.name}</TableCell>
              <TableCell align="right">{stat.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
