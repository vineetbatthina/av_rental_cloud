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
      <div container>
        <div class="row">
          <div class="col-sm" >
            <div
              class="card mb-4 box-shadow border-0"
              style={{ backgroundColor: "orange" }}
            >
              <div
                class="card-header"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <p className="text-center" style={{ fontSize: "35px" }}>
                  Connected AV Vehicles
                </p>
              </div>
              <div class="card-body">
                <p className="text-center" style={{ fontSize: "40px" }}>
                  {this.state.avCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NumberOfConnectedAVs;
