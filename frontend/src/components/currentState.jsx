import React, { Component } from "react";
import withCardView from "./common/withCardView";
import Table from "./common/table";

import { getJwt } from "../services/authService";
import { getAvStates } from "../services/avService";

import _ from "lodash";

// import { io } from "socket.io-client";
// const socket = io("http://localhost:3900", {
//   query: {
//     jwtToken: getJwt(),
//   },
// });


class CurrentState extends Component {
  constructor(props){
    super(props);
    this.setState = ({ current: "active"});

 
 console.log("hiiii"+JSON.stringify(this.props.data))
  }
   

// componentDidMount() {
//     //this.populateAVStatusAndCountData();
//     this.populateAVStatusListData();
//     socket.on("avStateUpdated", this.reRenderAV);
//   }

//   async populateAVStatusAndCountData() {
//     console.log("In data");
//     const { data: avStates } = await getAvStates();
//     console.log("AV STATES: ", avStates);
//     const avStatusDistributionData = [];
//     avStates.map((item) => {
//       avStatusDistributionData.push({
//         vId: item.vId,  
//         state: item.state,
//       });
//     });
//     this.setState({ avStatusDistributionData });
//     console.log("populated Count data");
// }
// async populateAVStatusListData() {
//     const { data: avStatus } = await getAvStates();
//     console.log("LIST DATA: ", avStatus);
//     // this.setState({ avStatus });
//     const avStatusDistributionData= [];
//     avStatus.map((item) => {
//         avStatusDistributionData.push({
//           state: item.state,
//         });
//     });
//     this.setState({ avStatusDistributionData });
//   }

//   reRenderAV = (data) => {
//     const avStates = this.state.avStatusDistributionData;
//     // _.remove(avStates, (avStatus) => {
//     //     return avStatus.number == data.number;
//     //   });
//     console.log("SOCKET INCOMING DATA: ", data);
//     avStates.push(data);
//     // this.setState({ avStates });
//     console.log("Populating count data");
//     //this.populateAVStatusAndCountData();
//   };


//   async componentDidMount() {
//     const { data: userCount } = await getUserCount();
//     this.setState({ userCount: userCount.count });
//   }

  render() {
    const movedstyle={
      fontSize: "50px",
      color: "blue"
      
    };
    const movingstyle={
      fontSize: "50px",
      color: "green"
      
    };
    const idlestyle={
      fontSize: "50px",
      color: "orange"
      
    }
    return (
      <React.Fragment>
       <div className="col-md-5 col-10 my-5">
        <div class="card mb-4 box-shadow">
          <div class="card-header" style={{justifyContent:'center', display:'flex', backgroundColor:'orange', color:'black'}}>
          <h1 class="my-0 font-weight-normal">Current State</h1>
          </div>
          <div class="card-body">
          {this.props.data=="Moved" && (
                   <p className="text-center" style={movedstyle}>
                  {this.props.data}
                   </p>
                )}
          {this.props.data=="Idle" && (
                   <p className="text-center" style={idlestyle}>
                  {this.props.data}
                   </p>
                )}
          {this.props.data=="Moving" && (
                   <p className="text-center" style={movingstyle}>
                  {this.props.data}
                   </p>
                )}

            {/* <p className="text-center" style={{ fontSize: "50px" }}>
                {this.props.data}
                </p> */}
                {!this.props.data && (
                   <p className="text-center" style={{ fontSize: "50px" }}>
                  No status
                   </p>
                )}
         </div>
         </div>
         </div>
      </React.Fragment>
    );
  }
}

export default CurrentState;