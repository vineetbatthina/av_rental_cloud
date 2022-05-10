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
    data =[]
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
              Vehicle Info
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Current Location
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Service Status
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Current Status
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Color</TableCell>
            <TableCell className={classes.tableHeaderCell}>Mileage</TableCell>
            <TableCell className={classes.tableHeaderCell}>Space</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Road Service
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  <Grid item lg={10}>
                    <Typography className={classes.name}>
                      {" "}
                      ID: {row.vid}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      Make: {row.vmodel}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      Model: {row.vmake}
                    </Typography>
                  </Grid>
                </TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>
                  <Typography
                    className={classes.status}
                    style={{
                      backgroundColor:
                        (row.vservicestatus === "Inactive" && "red") ||
                        (row.vservicestatus === "Active" && "green") ||
                        (row.vservicestatus === "active" && "green") ||
                        (row.vservicestatus === "Blocked" && "orange"),
                    }}
                  >
                    {row.vservicestatus}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    className={classes.status}
                    style={{
                      backgroundColor:
                        (row.vcurrentstatus === "Inactive" && "green") ||
                        (row.vcurrentstatus === "Idle" && "blue") ||
                        (row.vcurrentstatus === "Blocked" && "orange"),
                    }}
                  >
                    {row.vcurrentstatus}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{row.vcolor}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{row.vmileage}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{row.vpassengerspace}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{row.roadservice}</Typography>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MTable;
