import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ comment: "" });
    this.props.saveComment(this.state.comment);
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button disabled={this.state.comment === "" ? true : false}>
              Submit Comment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
