import React, { Component } from "react";
import NumberOfAVUsers from "./numberOfAVUsers";
import NumberOfConnectedAVs from "./numberOfConnectedAVs";
import ConnectedAVDetails from "./connectedAVDetails";
import StatesOfConnectedAVs from "./statesOfConnectedAVs";
import UserList from "./userList";
import axios from "axios";
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
      <React.Fragment>
        <h1 className="text-center" style={{ marginBottom: "25px" }}>
          Admin Dashboard
        </h1>
        <ConnectedAVDetails></ConnectedAVDetails>
        <div className="row" style={{ margin: "0px" }}>
          <div className="col-md-6 col-10 my-5">
            <NumberOfAVUsers
              style={{
                margin: "30px 10px",
                float: "left",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            ></NumberOfAVUsers>
          </div>
          <div className="col-md-6 col-10 my-5" >
            <NumberOfConnectedAVs
              style={{
                margin: "30px 10px",
                float: "right",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            ></NumberOfConnectedAVs>
          </div>
        </div>
      
        {/* <UserList data ={udata}></UserList> */}

        {/* <div className="row" style={{ margin: "0px" }}>
          <div className="col-12">
            <StatesOfConnectedAVs
              style={{
                margin: "30px 10px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            ></StatesOfConnectedAVs>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default AdminDashboard;
