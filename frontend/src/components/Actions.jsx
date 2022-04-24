import React, { Component } from "react";
import withCardView from "./common/withCardView";
// import { getUserCount } from "../services/userService";

class ActionsService extends Component {
  constructor(props){
    super(props);
    this.setState = ({ roadservice: "No Service"});

 
 console.log("hiiii"+JSON.stringify(this.props.data))
  }
   
  

//   async componentDidMount() {
//     const { data: userCount } = await getUserCount();
//     this.setState({ userCount: userCount.count });
//   }

  render() {
    const mystyle={
      fontSize: "50px",
      color: "green"
    }
    return (
      <React.Fragment>
        <div className="col-md-5 col-10 my-5">
        <div class="card mb-4 box-shadow">
          <div class="card-header" style={{justifyContent:'center', display:'flex', backgroundColor:'orange', color:'black'}}>
          <h1 class="my-0 font-weight-normal">Actions</h1>
          </div>
          <div class="card-body">
            <p className="text-center" style={mystyle}>
                {this.props.data}
              </p>
              {!this.props.data && (
                <p className="text-center" style={{ fontSize: "50px" }}>
                No Service
                </p>
                )}
         </div>
         </div>
         </div>
      </React.Fragment>
    );
  }
}

export default ActionsService;