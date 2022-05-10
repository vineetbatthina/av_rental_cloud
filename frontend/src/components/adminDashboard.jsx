import React, { Component } from "react";
import NumberOfAVUsers from "./numberOfAVUsers";
import NumberOfConnectedAVs from "./numberOfConnectedAVs";
import ConnectedAVDetails from "./connectedAVDetails";
import StatesOfConnectedAVs from "./statesOfConnectedAVs";
import UserList from "./userList";
import axios from "axios";
import { Grid } from "@mui/material";
class AdminDashboard extends Component {
  state = {
    userdata : ""
  };
   componentWillMount() {
    console.log("entered here");
    axios.get("http://localhost:3900/admindash").then(response=>{
      console.log("userdata"+JSON.stringify(response));
      this.setState({
        userdata: response.data
      })
    })
    .catch(error=>{
      if(error){
        console.log(error);
      }
    })

  }
  render() {
    var udata = [];
    if(this.state.userdata && this.state){
      udata = this.state.userdata;
    }
    return (
      <Grid container style={{width:'100%'}} rowSpacing={1} columnSpacing={2}>
        <Grid item md={12}>
          <ConnectedAVDetails></ConnectedAVDetails>
        </Grid>
        <Grid item md={6}>
          <NumberOfAVUsers
            style={{
              margin: "30px 10px",
              float: "left",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          ></NumberOfAVUsers>
        </Grid>
        <Grid item md={6}>
          <NumberOfConnectedAVs
            style={{
              margin: "30px 10px",
              float: "right",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          ></NumberOfConnectedAVs>
        </Grid>
        
      </Grid>
        

    );
  }
}

export default AdminDashboard;
