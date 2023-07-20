import React, { Component } from "react";
import "../styles.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Red from "../assets/red.svg";
import Orange from "../assets/orange.svg";
import Yellow from "../assets/yellow.svg";
import Green from "../assets/green.svg";

export class MainCard extends Component {
  constructor(props) {
    super(props);
  }

  // color = (count, color) => {
  //   if (count >= 0 || count <= 3) {
  //   } else if (count >= 4 || count <= 7) {
  //     return "#FFA500";
  //   } else if (count >= 8 || count <= 11) {
  //     return "#FFFF00";
  //   } else if (count >= 12 || count <= 15) {
  //     return "#006400";
  //   } else {
  //     return "#0000FF";
  //   }
  // };
  color = (count) => {
    if (count === 0 || count === 1 || count === 2 || count === 3) {
      return "#FF0000";
    } else if (count === 4 || count === 5 || count === 6 || count === 7) {
      return "#FFA500";
    } else if (count === 8 || count === 9 || count === 10 || count === 11) {
      return "#FFFF00";
    } else if (count === 12 || count === 13 || count === 14 || count === 15) {
      return "#006400";
    } else {
      return "#006400";
    }
  };
  getImage = (count) => {
    if (count === 0 || count === 1 || count === 2 || count == 3) {
      return Red;
    } else if (count == 4 || count == 5 || count == 6 || count == 7) {
      return Orange;
    } else if (count == 8 || count == 9 || count == 10 || count == 11) {
      return Yellow;
    } else if (count == 12 || count == 13 || count == 14 || count == 15) {
      return Green;
    } else {
      return Green;
    }
  };

  render() {
    const { jokesData, IncrementCount, DecrementCount } = this.props;
    return (
      <div className="d-flex flex-column align-items-center justify-content-between w-100">
        {jokesData.map((data) => {
          return (
            <div
              className="d-flex py-5 px-3 align-items-center justify-content-between w-100 abc"
              id="abc"
              style={{
                backgroundColor: "#fff",
                borderBottom: "1px solid #bcbcbc",
                height: 50,
              }}
            >
              <div className="d-flex align-items-center">
                <ArrowUpwardIcon
                  style={{
                    color: "#bcbcbc",
                    fontSize: "3rem",
                    cursor: "pointer",
                  }}
                  onClick={() => IncrementCount(data.id, data.count)}
                />
                <div
                  className="mx-2 d-flex align-items-center justify-content-center"
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "40px",
                    backgroundColor: "#fff",
                    boxShadow: "0 3px 5px #000000",
                    border: `3px solid ${this.color(data.count)}`,
                  }}
                >
                  <div style={{ fontSize: "20px" }}>{data.count}</div>
                </div>
                <ArrowDownwardIcon
                  style={{
                    color: "#bcbcbc",
                    fontSize: "3rem",
                    // marginRight: "8rem",
                    cursor: "pointer",
                  }}
                  onClick={() => DecrementCount(data.id, data.count)}
                />
              </div>
              <div id="joke" style={{ fontSize: "2rem" }}>
                {data.joke}
              </div>
              <div style={{ fontSize: "3rem" }}>
                <img
                  src={this.getImage(data.count)}
                  height="50px"
                  width="50px"
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MainCard;
