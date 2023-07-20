import React, { Component } from "react";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./styles.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokesData: [],
    };
  }

  newJokes = () => {
    this.setState({ jokesData: [] });
    this.fetchDadJoke();
  };

  fetchDadJoke = () => {
    if (localStorage.getItem("jokesData")) {
      this.setState({
        jokesData: JSON.parse(localStorage.getItem("jokesData")),
      });
    } else {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" },
          })
          .then((res) => {
            res.data.count = 0;
            res.data.color = "#fff";
            this.setState({ jokesData: [...this.state.jokesData, res.data] });
            localStorage.setItem(
              "jokesData",
              JSON.stringify(this.state.jokesData)
            );
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

    // var data = {
    //   color: "#fff",
    //   count: 0,
    //   id: "lyPZgVn3Le",
    //   joke: "What did the ocean say to the shore? Nothing, it just waved.",
    //   status: 200,
    // };
    // localStorage.setItem("DataOne", JSON.stringify(data));
    // console.log(localStorage.getItem("DataOne"));
  };

  componentDidMount() {
    this.fetchDadJoke();
  }

  IncrementCount = (id, count) => {
    this.state.jokesData.map((data) => {
      if (data.id === id) {
        data.count = count + 1;
        this.setState({ count: data.count });
      }
    });

    return count;
  };

  DecrementCount = (id, count) => {
    this.state.jokesData.map((data) => {
      if (data.id === id) {
        if (data.count === 0) {
          this.setState({ count: 0 });
        } else {
          data.count = count - 1;
          this.setState({ count: data.count });
        }
      }
    });
    return count;
  };

  render() {
    return (
      <div
        className="d-flex align-items-center bg-secondary"
        style={{ minHeight: "100vh" }}
      >
        <Main
          jokesData={this.state.jokesData}
          IncrementCount={this.IncrementCount}
          DecrementCount={this.DecrementCount}
          newJokes={this.newJokes}

          // count={}
        />
      </div>
    );
  }
}

export default App;
