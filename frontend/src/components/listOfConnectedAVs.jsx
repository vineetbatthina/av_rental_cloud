import React, { Component } from "react";

import withCardView from "./common/withCardView";
import Table from "./common/table";
import { changeVehicleStatus } from "../services/avService";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class ListOfConnectedAVs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCart: false,
      vehicleId: "",
      vehicleStatus: "",
    };
  }

  state = {};

  columns = [
    { path: "vid", label: "AV Number" },
    { path: "email", label: "AV Owner" },
    { path: "vmake", label: "AV Make" },
    { path: "vmodel", label: "AV Model" },
    { path: "vmileage", label: "AV Mileage" },
    { path: "roadservice", label: "Road Service" },
    { path: "vcurrentstatus", label: "AV State" },
  ];

  changeVehicleId = (e) => {
    this.setState({
      vehicleId: e.target.value,
    });
  };

  changeVehicleStatus = (e) => {
    this.setState({
      vehicleStatus: e.target.value,
    });
  };

  editVehicleStatus = async (e) => {
    e.preventDefault();
    try {
      await changeVehicleStatus(this.state.vehicleId, this.state.vehicleStatus);
      window.location.reload(true);
    } catch (ex) {
      console.log(ex);
    }
  };

  closePopup = (e) => {
    this.setState({
      showCart: false,
      vehicleId: "",
      vehicleStatus: "",
    });
  };

  onCartClick = () => {
    this.setState({
      showCart: true,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>List of connected AVs</h1>
        <div
          classNameName="dropdown-divider"
          style={{
            marginBottom: "30px",
            borderBlockColor: "#BEE5F0",
          }}
        ></div>
        <Table
          data={this.props.data}
          columns={this.columns}
          keyAtt="number"
        ></Table>
        <button
          type="button"
          onClick={this.onCartClick}
          className="btn"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Edit Vehicle Status
        </button>
        <Modal show={this.state.showCart} onHide={this.closePopup} centered>
          <Modal.Header closeButton>
            <Modal.Title>Enter Vehicle Details </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  id="inputGroup-sizing-default"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Vehicle Id
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                value={this.state.vehicleId}
                onChange={(e) => this.setState({ vehicleId: e.target.value })}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  class="input-group-text"
                  style={{ backgroundColor: "black", color: "white" }}
                  id="inputGroup-sizing-default"
                >
                  Vehicle Status
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                value={this.state.vehicleStatus}
                onChange={(e) =>
                  this.setState({ vehicleStatus: e.target.value })
                }
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Link>
              <button
                onClick={this.editVehicleStatus}
                style={{
                  width: "100%",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                Change
              </button>
            </Link>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withCardView(ListOfConnectedAVs);
