import React, { Component } from "react";
import withCardView from "./common/withCardView";
import { getAVCount } from "../services/avService";

class NumberOfConnectedAVs extends Component {
  state = {};

  async componentDidMount() {
    const { data: avCount } = await getAVCount();
    this.setState({ avCount: avCount.count });
  }

  render() {
    return (
      <React.Fragment>
        <div className="card" style={{backgroundColor: "orange"}}>
        <h1>Connected AV Vehicles</h1>
        <div
          className="dropdown-divider"
          style={{
            marginBottom: "30px",
            borderBlockColor: "black",
          }}
        ></div>
        <p className="text-center" style={{ fontSize: "50px" }}>
          {this.state.avCount}
        </p>
        </div>
      </React.Fragment>
    );
  }
}

export default NumberOfConnectedAVs;
