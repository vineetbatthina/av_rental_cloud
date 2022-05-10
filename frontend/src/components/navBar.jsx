import React from "react";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import ListItemNavBar from "./common/listItemNavBar";
import "../styles/navbar.css";

const NavBar = () => {
  const user = auth.getCurrentUser();

  return (
    <nav
      className="navbar navbar-light fixed-top flex-md-nowrap p-10 shadow navbar-expand-md"
      style={{backgroundColor:'orange'}}
    >
      <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">
         Autonomous Vehicle Cloud
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav px-3">
          {user && user.isadmin && (
            <ListItemNavBar
              iconClass="fa fa-bar-chart"
              label="Dashboard"
              path="/dashboard"
            ></ListItemNavBar>
          )}
          {user && !user.isadmin && (
            <React.Fragment>
              <ListItemNavBar
              
                label="Schedule a Ride"
                path="/mySchedule"
              ></ListItemNavBar>
               <ListItemNavBar
               
               label="View Rides History"
               path="/myRides"
             ></ListItemNavBar>

               <ListItemNavBar
               
               label="My Plan"
               path="/myplan"
             ></ListItemNavBar>
             <ListItemNavBar
              
              label="Add a Vehicle"
              path="/addVehicle"
            ></ListItemNavBar>
             <ListItemNavBar
                
                label="All Vehicles"
                path="/allVehicles"
              ></ListItemNavBar>
              <ListItemNavBar
                
                label="My Vehicles"
                path="/myVehicles"
              ></ListItemNavBar>

              <ListItemNavBar
                
                label="Dashboard"
                path="/mystatus"
              ></ListItemNavBar>
             
             
             
              
            </React.Fragment>
          )}
        </ul>
        <ul className="navbar-nav px-3 ml-auto">
          {!user && (
            <React.Fragment>
              <ListItemNavBar
                // iconClass="fa fa-sign-out"
                label="Login"
                path="/login"
              ></ListItemNavBar>
              <ListItemNavBar
                //iconClass="fa fa-sign-out"
                label="Register"
                path="/register"
              ></ListItemNavBar>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <ListItemNavBar
                label={ user.name }
                path="/"
              ></ListItemNavBar>
              <ListItemNavBar
                iconClass="fa fa-sign-out"
                label="Log Out"
                path="/logout"
              ></ListItemNavBar>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
