import React, { Component } from "react";
import withCardView from "./common/withCardView";
import { getUserCount } from "../services/userService";

class NumberOfAVUsers extends Component {
  state = {};

  async componentDidMount() {
    const { data: userCount } = await getUserCount();
    this.setState({ userCount: userCount.count });
  }

  render() {
    return (
        <div container>
          <div class="row">
            <div class="col-sm">
              <div
                class="card mb-4 box-shadow border-0"
                style={{ backgroundColor: "orange" }}
              >
                <div
                  class="card-header"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <p className="text-center" style={{ fontSize: "35px" }}>
                    Registered AV Users
                  </p>
                </div>
                <div class="card-body">
                  <p className="text-center" style={{ fontSize: "40px" }}>
                    {this.state.userCount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default NumberOfAVUsers;
