import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  render() {
    return (
      <div>
        {this.props.componentComments.map(comment => (
          <li key={comment}>{comment}</li>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    componentComments: state.comments //comes from reducers => index.js => comments => mapStateToProps => CommentList
  };
}

export default connect(mapStateToProps)(CommentList);
