import React, { Component } from "react";
import withCardView from "./common/withCardView";
import Table from "./common/table";

class UserList extends Component {
  constructor(props){
    super(props);
    console.log("props"+this.props.data);

  }
  render() {
    return (
        <p>hii</p>
    //   <React.Fragment>
    //    <div className="col-md-5 col-10 my-5">
    //     <div class="card mb-4 box-shadow">
    //       <div class="card-header">
    //       <h1 class="my-0 font-weight-normal">Current State</h1>
    //       </div>
    //       <div class="card-body">
    //       {this.props.data=="Moved" && (
    //                <p className="text-center" style={movedstyle}>
    //               {this.props.data}
    //                </p>
    //             )}
    //       {this.props.data=="Idle" && (
    //                <p className="text-center" style={idlestyle}>
    //               {this.props.data}
    //                </p>
    //             )}
    //       {this.props.data=="Moving" && (
    //                <p className="text-center" style={movingstyle}>
    //               {this.props.data}
    //                </p>
    //             )}

    //             {!this.props.data && (
    //                <p className="text-center" style={{ fontSize: "50px" }}>
    //               No status
    //                </p>
    //             )}
    //      </div>
    //      </div>
    //      </div>
    //   </React.Fragment>
    );
  }
}

export default UserList;