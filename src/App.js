import React, { Component } from "react";

import CommentBox from "./components/commentBox";
import CommentList from "./components/commentList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default App;
