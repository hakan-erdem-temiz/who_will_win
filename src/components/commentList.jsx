import { React, Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  render() {
    return this.props.componentComments;
  }
}

function mapStateToProps(state) {
  return {
    componentComments: state.comments //comes from reducers => index.js => comments => mapStateToProps => CommentList
  };
}

export default connect(mapStateToProps)(CommentList);
