import React, { Component } from "react";
import withCardView from "./common/withCardView";
import Table from "./common/table";
import _ from "lodash";

class VehicleId extends Component {
    state = { vid: "N/A",
      };

      columns = [
        { path: "vid", label: "Vehicle License Plate" },
      ];

  render() {
    return (
      <React.Fragment>
        <div className="col-md-5 col-10 my-5">
        <div class="card box-shadow border-0" style={{width:'100%'}}>
          <div class="card-header" style={{justifyContent:'center', display:'flex', backgroundColor:'orange', color:'black'}}>
          <h1 class="my-0 font-weight-normal">Vehicle License Plate</h1>
          </div>
          <div class="card-body">
           
        <p className="text-center" style={{ fontSize: "50px" }}>
        {this.props.data}
        </p>
        {!this.props.data && this.props.data.length === 0 && (
           <p className="text-center" style={{ fontSize: "50px" }}>
           {this.state.vid}
           </p>
        )}
         </div>
         </div>
         </div>
      </React.Fragment>
    );
  }
}

export default VehicleId;