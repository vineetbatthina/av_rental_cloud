// import React from "react";
import React, { Component } from "react";
import auth from "../services/authService";
import Joi from "joi-browser";
import Form from "./common/form";
import { Redirect } from "react-router";
import { scheduleRide } from "../services/userService";
import { getVehicles } from "../services/userService";

class ScheduleRide extends Form {
  state = {
    data: { vId: "", Origin: "", Passengers: "", Destination: "" },
    errors: {},
  };

  schema = {
    vId: Joi.string().required().label("Vehicle ID"),
    Origin: Joi.string()
      .regex(/^[a-zA-Z ]+$/)
      .required()
      .label("Origin"),
    Passengers: Joi.number()
      .integer()
      .min(0)
      .max(8)
      .required()
      .label("Vehicle Passenger Space"),
    // Destination: Joi.string().required().label("Destination"),
    // Date: Joi.date().greater('1-1-2020'),
    Destination: Joi.string()
      .regex(RegExp(/^[a-zA-Z ]+$/))
      .required()
      .label("Destination"),
  };

  async componentDidMount() {
    const { data: vehicles } = await getVehicles();
    console.log("Made it: ", vehicles);
    this.setState(vehicles);
  }

  doSubmit = async () => {
    function getFormattedDate() {
      var date = new Date();
      var str =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
      return str;
    }
    try {
      console.log("Submitted");
      const { vId, Origin, Passengers, Destination, Datetime } =
        this.state.data;
      // const { paymentType } = this.state.data;
      const scheduleData = {
        vId,
        Origin,
        Passengers,
        Destination,
        Datetime,
      };
      // function getFormattedDate() {
      //     var date = new Date();
      //     var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      //     return str;
      // }
      console.log(getFormattedDate());
      //scheduleData.Datetime = getFormattedDate();
      scheduleData.Datetime = getFormattedDate();
      console.log(this.state.data);
      console.log("Submitted1");
      console.log(scheduleData);
      //{vId: '567', Origin: 'San Jose', Passengers: '4', Destination: 'San Francisco', Datetime: '2022-5-16 23:20:45'}
      console.log("Submitted2");
      const scheduleRideResponse = await scheduleRide(scheduleData);
      console.log(scheduleRideResponse);
      if(scheduleRideResponse.status==200){
        alert("Receipt has been sent to your mobile number");
        localStorage.setItem('rideInfo',JSON.stringify(scheduleData));
      }
      this.props.history.push("/myRides");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log("CAUGHT HERE");
        const errors = this.state.errors;
        errors.vId = ex.response.data;
        errors.message = "TEST";
        this.setState({ errors });
      }
    }
  };

  render() {
    // const user = auth.getCurrentUser();
    const { vehicles } = this.state;
    return (
      <React.Fragment>
        <div style={{justifyContent:'center', display:'flex', marginTop:'10%'}}>
          <div className="card box-shadow border-0" style={{width:'100%'}}>
            <div className="card-header" style={{justifyContent:'center', display:'flex', backgroundColor:'black', color:'white'}}>
              <h4 className="my-0 font-weight-normal">Schedule your ride</h4>
            </div>
            <div className="card-body" style={{ backgroundColor: "orange" }}>
              <form onSubmit={this.handleSubmit}>
                {/* <select>
                {this.state.data.map(obj => (
                    <option key = {obj} value = {obj}></option>
                ))}
            </select> */}
                {/* {this.state.data.vId} */}
                {this.renderInput("vId", "VID")}
                {this.renderInput("Origin", "Pick-up Location")}
                {this.renderInput("Passengers", "Number of passengers")}
                {this.renderInput("Destination", "Drop-off Location")}
                {/* {this.renderInput("Date", "Date")} */}
                {this.renderButton("Book Ride")}
              </form>
            </div>
          </div>
        </div>
        <div style={{height:'100vh'}}></div>
      </React.Fragment>
    );
  }
}

export default ScheduleRide;
