import React, { Component } from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";
import { getJwt } from "../services/authService";
import withCardView from "./common/withCardView";
import { socket } from "../App";
import axios from "axios";

// import { io } from "socket.io-client";
// const socket = io("http://localhost:3900", {
//   query: {
//     jwtToken: getJwt(),
//   },
// });

const avData1 = [
  {
    vC: "1",
    vU: "2",
    vA: "3",
    vB: "3",
    vD: "3",
  },
];

const avData2 = [
  {
    vC: "ON",
    vU: "ON",
    vA: "Activated",
    vB: "32 psi",
    vD: "32 psi",
  },
];

class SensorInfo extends Component {
  state = {
    tailight: "",
    headlight: "",
    temperature: "",
    vid: "",
    gps: "",
  };

  columns = [
    { path: "headlight", label: "Vehicle Headlights" },
    { path: "tailight", label: "Vehicle Taillights" },
    { path: "temperature", label: "Vehicle Temperature" },
    { path: "gps", label: "GPS data" },
    // { path: "vD", label: "Vehicle Left Tire" },
  ];

  componentDidMount() {
    console.log("yoyoyoyo");
    axios
      .get("http://localhost:3900/sensorinfo")
      .then((response) => {
        console.log("hello entered here" + JSON.stringify(response));
        this.setState({
          time: response.data.Vehicle[5],
          speed: response.data.Vehicle[7],
          heading: response.data.Vehicle[8],
          location: response.data.Vehicle[9],
          gnss: response.data.Vehicle[10],
        });
      })
      .catch((error) => {
        if (error) {
          console.log(error);
        }
      });

    console.log("MADE IT PAS SOCKET");
  }

  reRenderAV = (data) => {
    console.log("SOCKET INCOMING DATA: ", data);
    this.setState({
      tailight: data.tailight,
      headlight: data.headlight,
      temperature: data.temperature,
      vid: data.vid,
      gps: data.gps,
    });
    console.log("SET STATE", this.state.tailight);
  };

  generateRandom = (min = 0, max = 100) => {
    // find diff
    let difference = max - min;

    // generate random number
    let rand = Math.random();

    // multiply with difference
    rand = Math.floor(rand * difference);

    // add with min value
    rand = rand + min;

    return rand;
  };

  render() {
    var now = new Date();
    var fromLocations = [
      "San Jose",
      "Santa Clara",
      "Dublin",
    ];
    var toLocations = [
      "San Francisco",
      "Milipitas",
      "San Ramon",
    ];
    var carStates = [
      "Active",
      "Active",
      "Active",
      "Active",
      "Inactive",
      "Needs Maintenance",
      "Idle",
      "Waiting",
    ];
    return (
      <React.Fragment>
        <h1
          className="text-center"
          style={{ marginBottom: "25px", color: "orange" }}
        >
          Additional Sensor Information
        </h1>

        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div
                class="card mb-4 box-shadow border-0"
                style={{ backgroundColor: "orange" }}
              >
                <div class="card-header" style={{ backgroundColor:'black', color:'white' }}>
                  <p className="text-center" style={{ fontSize: "35px" }}>
                    Last Time Stamp
                  </p>
                </div>
                <div class="card-body">
                  <p className="text-center" style={{ fontSize: "25px" }}>
                    {/* {this.state.time} */}
                    {now.toUTCString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <div
                class="card mb-4 box-shadow border-0"
                style={{ backgroundColor: "orange" }}
              >
                <div class="card-header" style={{ backgroundColor:'black', color:'white' }}>
                  <p className="text-center" style={{ fontSize: "35px" }}>
                    Current Speed
                  </p>
                </div>
                <div class="card-body">
                  <p className="text-center" style={{ fontSize: "25px" }}>
                    {/* {this.state.speed} */}
                    {this.generateRandom()} km/hr
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div
                class="card mb-4 box-shadow border-0"
                style={{ backgroundColor: "orange" }}
              >
                <div class="card-header" style={{ backgroundColor:'black', color:'white' }}>
                  <p className="text-center" style={{ fontSize: "35px" }}>
                    Current Location
                  </p>
                </div>
                <div class="card-body">
                  <p className="text-center" style={{ fontSize: "25px" }}>
                    {/* {this.state.heading} */}
                    {fromLocations[this.generateRandom(0, fromLocations.length)]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <div
                class="card mb-4 box-shadow border-0"
                style={{ backgroundColor: "orange" }}
              >
                <div class="card-header" style={{ backgroundColor:'black', color:'white' }}>
                  <p className="text-center" style={{ fontSize: "35px" }}>
                    Next Location
                  </p>
                </div>
                <div class="card-body">
                  <p className="text-center" style={{ fontSize: "25px" }}>
                    {/* {this.state.location} */}
                    {toLocations[this.generateRandom(0, toLocations.length)]}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div
                class="card mb-4 box-shadow border-0"
                style={{ backgroundColor: "orange" }}
              >
                <div class="card-header" style={{ backgroundColor:'black', color:'white' }}>
                  <p className="text-center" style={{ fontSize: "35px"}}>
                    Vehicle Status
                  </p>
                </div>
                <div class="card-body">
                  <p className="text-center" style={{ fontSize: "25px" }}>
                    {/* {this.state.gnss} */}
                    {carStates[this.generateRandom(0, carStates.length)]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{height:'100vh'}}></div>
      </React.Fragment>
    );
  }
}

//export default SensorInfo;

export default SensorInfo;


// import React, { Component } from "react";
// import auth from "../services/authService";
// import { Link } from "react-router-dom";
// import Table from "./common/table";
// import { getJwt } from "../services/authService";
// import withCardView from "./common/withCardView";
// import { socket } from "../App";
// import axios from "axios";

// // import { io } from "socket.io-client";
// // const socket = io("http://localhost:3900", {
// //   query: {
// //     jwtToken: getJwt(),
// //   },
// // });

// const avData1 = [
//   {
//     vC: "1",
//     vU: "2",
//     vA: "3",
//     vB: "3",
//     vD: "3",
//   },
// ];

// const avData2 = [
//   {
//     vC: "ON",
//     vU: "ON",
//     vA: "Activated",
//     vB: "32 psi",
//     vD: "32 psi",
//   },
// ];

// class SensorInfo extends Component {
//   state = {
//     tailight: "",
//     headlight: "",
//     temperature: "",
//     vid: "",
//     gps: "",
//   };

//   columns = [
//     { path: "headlight", label: "Vehicle Headlights" },
//     { path: "tailight", label: "Vehicle Taillights" },
//     { path: "temperature", label: "Vehicle Temperature" },
//     { path: "gps", label: "GPS data" },
//     // { path: "vD", label: "Vehicle Left Tire" },
//   ];

//   componentDidMount() {
//     console.log("yoyoyoyo");
//     axios.get("http://localhost:3900/sensorinfo").then(response=>{
//       console.log("hello entered here"+JSON.stringify(response));
//       this.setState({
//         time : response.data.Vehicle[5],
//         speed : response.data.Vehicle[7],
//         heading : response.data.Vehicle[8],
//         location :  response.data.Vehicle[9],
//         gnss : response.data.Vehicle[10]
//       })
//     })
//     .catch(error=>{
//       if(error){
//         console.log(error);
//       }
//     })

//     console.log("MADE IT PAS SOCKET");
//   }

//   reRenderAV = (data) => {
//     console.log("SOCKET INCOMING DATA: ", data);
//     this.setState({
//       tailight: data.tailight,
//       headlight: data.headlight,
//       temperature: data.temperature,
//       vid: data.vid,
//       gps: data.gps,
//     });
//     console.log("SET STATE", this.state.tailight);
//   };

//   render() {
//     return (
 
//       <React.Fragment>
//         <h1 className="text-center" style={{ marginBottom: "25px", color:'orange' }}>
//           Additional Sensor Information
//         </h1>
//         <div class="card-deck mb-3 text-center">
//         <div className="col-md-7 col-10 my-5">
//         <div class="card mb-4 box-shadow border-0" style={{backgroundColor: "orange"}}>
//           <div class="card-body">
//             <p className="text-center" style={{fontSize: "50px"}}>
//             {this.state.time}
//               </p>
//           </div>
//         </div>
//          </div>
//          <div className="col-md-5 col-10 my-5">
//         <div class="card mb-4 box-shadow border-0" style={{backgroundColor: "orange"}}>
         
//           <div class="card-body">
//             <p className="text-center" style={{ fontSize: "50px" }}>
//             {this.state.speed}
//               </p>
//           </div>
//         </div>
//          </div>
//          <div className="col-md-5 col-10 my-5">
//         <div class="card mb-4 box-shadow border-0" style={{backgroundColor: "orange"}}>
          
//           <div class="card-body">
//             <p className="text-center" style={{ fontSize: "50px" }}>
//             {this.state.heading}
//               </p>
//           </div>
//         </div>
//          </div>

//          <div className="col-md-7 col-10 my-5">
//         <div class="card mb-4 box-shadow border-0" style={{backgroundColor: "orange"}}>
         
//           <div class="card-body">
//             <p className="text-center" style={{ fontSize: "50px" }}>
//             {this.state.location}
//               </p>
//           </div>
//         </div>
//          </div>

//          <div className="col-md-10 col-10 my-5">
//         <div class="card mb-4 box-shadow border-0" style={{backgroundColor: "orange"}}>

//           <div class="card-body">
//             <p className="text-center" style={{ fontSize: "50px" }}>
//             {this.state.gnss}
//               </p>
//           </div>
//         </div>
//          </div>


//             </div>

       
        
        
//         {/* <Table data={this.state.data} columns={this.columns} keyAtt="headlight" ></Table> */}
//       </React.Fragment>
//     );
//   }
// }

// //export default SensorInfo;

// export default SensorInfo;

