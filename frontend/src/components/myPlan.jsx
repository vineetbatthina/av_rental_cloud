import React, { Component } from "react";
import CurrentPlan from "./currentPlan";
import PastPlans from "./pastPlans";
import FuturePlan from "./futurePlan";
import { getSubscriptionData } from "../services/userService";
import { Link } from "react-router-dom";
import Button from "./common/button";

class MyPlan extends Component {
  state = {};

  async componentDidMount() {
    const { data: planDetails } = await getSubscriptionData();
    console.log("DATA: ", planDetails);
    this.setState({
      futurePlans: planDetails.future,
      currentPlan: planDetails.current,
      pastPlans: planDetails.past,
    });
  }

  render() {
    return (
      <React.Fragment>

        {/* <FuturePlan
          style={{ marginTop: "30px" }}
          data={this.state.futurePlans}
        ></FuturePlan>  */}
        <CurrentPlan
          style={{ marginTop: "35px" ,backgroundColor: "orange"}}
          data={this.state.currentPlan}
        ></CurrentPlan>

         <Link
          className="btn"
          to={{
            pathname: "/myPlan/addPlan",
            state: {
              futurePlans: this.state.futurePlans,
              currentPlan: this.state.currentPlan,
            },
          }}
          style={{backgroundColor:'black', color:'white', borderRadius:'5px', width:'25%', height:'100%'}}
        >
          Add Plan
        </Link>
      </React.Fragment>
    );
  }
}

export default MyPlan;
