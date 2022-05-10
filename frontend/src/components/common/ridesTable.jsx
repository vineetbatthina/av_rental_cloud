import React from "react";
import { makeStyles } from "@mui/styles";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "orange",
  },
  name: {
    fontWeight: "bold",
    color: "orange",
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

function MTable({ data }) {
  const classes = useStyles();
  console.log(data);
  if(!data){
    data = []
  }

  return (
    <TableContainer
      component={Paper}
      className={classes.tableContainer}
      style={{ width: "100%" }}
    >
      <Table
        className={classes.table}
        aria-label="simple table"
        style={{ width: "100%" }}
      >
        <TableHead style={{ color: "white" }}>
          <TableRow style={{ color: "white" }}>
            <TableCell className={classes.tableHeaderCell}>
              Registration #
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Origin Location
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Passenger Capacity
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Destination Location
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Date/Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.vid}</TableCell>
                <TableCell>
                    {row.origin}
                </TableCell>
                <TableCell>
                    {row.passengers}
                </TableCell>
                <TableCell>
                    {row.destination}
                </TableCell>
                <TableCell>
                    {row.vdatetime}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MTable;
