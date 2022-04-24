import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    return (
      <thead className="thead-dark">
        <tr style={{backgroundColor:'orage', color:'black'}}>
          {this.props.columns.map((column) => (
            <th
              className="clickable"
              key={column.path}
              style={{
                fontSize: "22px",
                paddingLeft: "25px",
                fontFamily: "Courier",
                backgroundColor:'orange',
                color:'black'
              }}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
