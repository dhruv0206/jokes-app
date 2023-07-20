import React, { Component } from "react";
import Smiley from "../assets/main.svg";
import MainCard from "./MainCard";
import "../styles.css";

export class Main extends Component {
  render() {
    const { jokesData, IncrementCount, DecrementCount, newJokes } = this.props;

    return (
      <div className=" d-flex mx-auto align-items-center justify-content-center">
        <div
          className="mt-4 d-flex flex-column justify-content-center title"
          id="title"
          style={{}}
        >
          <div className="text-white mx-auto" style={{ fontSize: 50 }}>
            <span style={{ fontWeight: "bold" }}>Dad</span> Jokes
          </div>
          <div
            className="d-flex align-items-center justify-content-center mx-auto"
            style={{
              boxShadow: "0 3px 5px #000000",
              height: "200px",
              width: "200px",
              borderRadius: "200px",
            }}
          >
            <img
              className="mx-auto"
              src={Smiley}
              height="180px"
              width="180px"
            />
          </div>
          <button
            className="p-3 w-50 mx-auto mt-5"
            style={{
              fontSize: 20,
              outline: "none",
              border: "none",
              borderRadius: "20px",
              boxShadow: "0 3px 5px #000000",
            }}
            onClick={() => newJokes()}
          >
            New Jokes
          </button>
        </div>
        <MainCard
          jokesData={jokesData}
          IncrementCount={IncrementCount}
          DecrementCount={DecrementCount}

          // count={count}
        />
      </div>
    );
  }
}

export default Main;
