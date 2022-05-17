import React from "react";
import auth from "../services/authService";
import Joi from "joi-browser";
import Form from "./common/form";
import { Redirect } from "react-router";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { username, password } = this.state.data;
      await auth.login(username, password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const user = auth.getCurrentUser();

    if (!user) {
      console.log("DID NOT GET USER");
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10%",
            height:'100vh'
          }}
        >
          <div className="col-md-6 col-10 my-5" >
            <div className="card border-0" style={{width:'100%'}}>
              <div
                className="card-header"
                style={{justifyContent:'center', display:'flex', backgroundColor:'orange', color:'black'}}
              >
                <h4
                  className="my-0 font-weight-normal"
                  style={{ alignContent: "center" }}
                >
                  Login
                </h4>
              </div>
              <div
                className="card-body"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <form
                  onSubmit={this.handleSubmit}
                  style={{ color: "white", marginBottom: "5%" }}
                >
                  {this.renderInput("username", "Username")}
                  {this.renderInput("password", "Password", "password")}
                  {this.renderButton("Login")}
                </form>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p>New User?</p> <a href="/register" style={{marginLeft:'1%', color:'orange', fontWeight:'bold'}}> Register Here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      console.log("GOT USER");
      if (user && user.isadmin) {
        return (
          <Redirect
            to={{
              pathname: "/dashboard",
            }}
          ></Redirect>
        );
      } else {
        return (
          <Redirect
            to={{
              pathname: "/mySchedule",
            }}
          ></Redirect>
        );
      }
    }
  }
}

export default LoginForm;
