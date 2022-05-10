import React, { Component } from "react";
import { getVehicles } from "../services/userService";
import withCardView from "./common/withCardView";
// import { getUserCount } from "../services/userService";
import { getSubscriptionData } from "../services/userService";

class ServiceState extends Component {
  state = {service: "Inactive"};

  async componentDidMount() {
    const { data: userCount } = await getSubscriptionData();
    // const result = userCount.filter(vservicestatus => vservicestatus);
    console.log("R1", userCount.current);
    if(userCount.current != 0)
    {
      const service = "Active"
      this.setState({service});
    }
    
  }

  render() {
    const active={
      fontSize: "50px",
      color: "green"
    };
    const inactive={
      fontSize: "50px",
      color: "yellow"
    };

    return (
      <React.Fragment>
        <div className="col-md-5 col-10 my-5">
        <div class="card mb-4 box-shadow border-0">
          <div class="card-header" style={{justifyContent:'center', display:'flex', backgroundColor:'orange', color:'black'}}>
          <h1 class="my-0 font-weight-normal">Service Status</h1>
          </div>
          <div class="card-body">
            <p className="text-center" style={{ fontSize: "50px" }}>
                {this.props.data}
              </p>
              {!this.props.data  && this.state.service=="Active" && (
                 <p className="text-center" style={active}>
                  {this.state.service}
                 </p>
                )}
              {!this.props.data  && this.state.service=="Inactive" && (
                 <p className="text-center" style={inactive}>
                  {this.state.service}
                 </p>
                )}
         </div>
         </div>
         </div>
      </React.Fragment>
    );
  }
}

export default ServiceState;