import React, { Component } from "react";
import Table from "./common/table";
import { getRides } from "../services/userService";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import RidesTable from "./common/ridesTable";
import { Grid } from "@mui/material";

const user = auth.getCurrentUser();
// let user1 = user.name.slice(0,1).toUpperCase() + user.name.slice(1,user.name.length);
let user1 = "";
if (user != null) {
  user1 =
    user.name.slice(0, 1).toUpperCase() + user.name.slice(1, user.name.length);
}

class MyRides extends Component {
  state = { vId: "", Origin: "", vPspace: "", Destination: "", Date: "" };

  columns = [
    { path: "vid", label: "Vehicle License Plate #" },
    { path: "origin", label: "Origin Location" },
    { path: "passengers", label: "Vehicle Passenger Space" },
    { path: "destination", label: "Destintaion Location" },
    { path: "vdatetime", label: "Date/Time" },
  ];

  async componentDidMount() {
    const { data: rides } = await getRides();
    console.log("Made it: ", rides);
    this.setState({ rides });
    console.log(this.state.rides);
  }

  render() {
    const { rides } = this.state;
    // console.log(y);
    return (
        <Grid container>
          <Grid item md={12}>
            <Link
              className="btn"
              to={{
                pathname: "/mySchedule",
              }}
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                width: "25%",
                height: "100%",
                marginLeft:'1%'
              }}
            >
              Schedule a Ride
            </Link>
          </Grid>
          <Grid item md={12}>
            <RidesTable data={rides} />
          </Grid>
        </Grid>
    );
  }
}

export default MyRides;
