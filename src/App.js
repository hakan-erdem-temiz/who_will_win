import React, { Component } from "react";

import CommentBox from "./components/commentBox";
import CommentList from "./components/commentList";
import WWWCharts from "./components/barChart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <WWWCharts />
        <CommentBox />
        <CommentList />
        <canvas id="myChart" width="400" height="400" />
      </div>
    );
  }
}

export default App;
