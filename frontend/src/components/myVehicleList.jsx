import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./common/button";
import auth from "../services/authService";
import { getVehicles } from "../services/userService";
import Table from "./common/table";
import { getSubscriptionData } from "../services/userService";

const user = auth.getCurrentUser();
// let user1 = user.name.slice(0,1).toUpperCase() + user.name.slice(1,user.name.length);
let user1 = "";
if (user != null) {
    user1 = user.name.slice(0, 1).toUpperCase() + user.name.slice(1, user.name.length);
}

class VehicleList extends Component {
    state = {vId: "", vColor: "", vMake: "", vModel: "", vMileage: "", vPspace: "", vServiceStatus: "", vCurrentStatus: "", vLocation: "", vRoadService: ""};

    columns = [
        { path: "vid", label: "Vehicle Id" },
        { path: "vcolor", label: "Vehicle Color" },
        { path: "vmake", label: "Vehicle Make" },
        { path: "vmodel", label: "Vehicle Model" },
        { path: "vmileage", label: "Vehicle Mileage" },
        { path: "vpassengerspace", label: "Passenger Space" },
        { path: "vservicestatus", label: "Service Status" },
        { path: "vcurrentstatus", label: "Current Status" },
        { path: "location", label: "Current Location" },
        { path: "roadservice", label: "Road Service" },
      ];

    async componentDidMount() {
        const { data: vehicles } = await getVehicles();
        console.log("Made it: ", vehicles);
        const data1 = [];
        let filteredVehicles = []
        if(localStorage.getItem('customerVehicleInfo')){
            vehicles.map(vehicle => {
                if(vehicle.vid == JSON.parse(localStorage.getItem('customerVehicleInfo')).vId){
                    filteredVehicles.push(vehicle);
                }
            })
        }
        else{
            vehicles.length= 0
        }
        
        // vechiles.map((item) => {
        //     data1.push({g
        //       vId: item.vId,
        //       vColor: item.vColor,
        //       vMake: item.vMake,
        //     });
        // });
        console.log(vehicles);
        console.log(filteredVehicles);
        this.setState({filteredVehicles});

        // const { data: planDetails } = await getSubscriptionData();
        // console.log("PD", planDetails);
        // console.log("PD", planDetails.current);
        // console.log("PD1", vehicles.vservicestatus);

        // if (planDetails.current)
        // {
        //     this.state.vehicles.vservicestatus = "active";
        //     //this.setState(vehicles.vServiceStatus);
        // }


        
        console.log("again made it", this.state.vehicles);
    }

    render() {
     
        const {filteredVehicles} = this.state;
        // console.log(y);
        return (
            
            <div className="container" style={{marginLeft: "-130px"}}>

                <div> 
                    {/* <Link style={{marginRight: "20px"}}
                        className="btn btn-dark"
                        to={{
                            pathname: "/addVehicle",
                        }}
                    >Add Vehicle</Link> */}
                    {/* <Link style={{marginRight: "20px"}}
                        className="btn btn-dark"
                        to={{
                            pathname: "/mySchedule",
                        }}
                    >Schedule Ride</Link> */}
                      
                    
                </div>
                
                <p></p>
                <div>
                    <Table data={filteredVehicles} columns={this.columns} keyAtt="vId" ></Table>
                    <Link 
                        className="btn btn-dark"
                        to={{
                            pathname: "/deleteVehicle",
                        }}
                    >Delete Vehicle</Link>
                </div>
            </div>
        );
    }

}

export default VehicleList;