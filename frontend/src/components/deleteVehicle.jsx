import React, { Component } from "react";
import auth from "../services/authService";
import Joi from "joi-browser";
import Form from "./common/form";
import { Redirect } from "react-router";
import { getVehicles } from "../services/userService";
import { deleteVehicle } from "../services/userService";

const user = auth.getCurrentUser();

class DeleteVehicle extends Form {
    state = {
        data: { vId: ""},
        errors: {},
    };

    schema = {
        vId: Joi.string().required().label("Vehicle ID"),
      };
  

  doSubmit = async () => {

    try{
      console.log("Submitted");
      const { vId } = this.state.data;
      // const { paymentType } = this.state.data;
      const vehicleId = {
        vId
      };
    
      console.log(this.state.data);
      console.log("Submitted1");
      console.log(vehicleId);
      console.log("Submitted2");
      await deleteVehicle(vehicleId);
      this.props.history.push("/allVehicles");
    }
    catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log("CAUGHT HERE");
        const errors = this.state.errors;
        errors.vId = ex.response.data;
        this.setState({ errors });
      }
    }
  };
// async componentDidMount() {
// 	const { data: vehicles } = await getVehicles();
//     var vIds = vehicles.map(function (f) {
//         return f.vId
//       });
//     console.log(vIds);
//     this.setState({
// 		vId: vIds
// 	});
// }

  render() {
    // const user = auth.getCurrentUser();

    return(
        <React.Fragment>
        <div className="col-md-10 col-10 my-5">

<div className="card mb-4 box-shadow">  

<div className="card-header" style={{justifyContent:'center', display:'flex', backgroundColor:'black', color:'white'}}>
  <h4 className="my-0 font-weight-normal">Delete Vehicle</h4>
 </div>
<div className="card-body" style={{backgroundColor: "orange"}}>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("vId", "VID")}
                {this.renderButton("Submit")}
            </form>
        </div>
        </div>
        </div>

        </React.Fragment>
        );
       
    }
}

export default DeleteVehicle;