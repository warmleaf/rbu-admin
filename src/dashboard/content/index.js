import React, { Component } from "react";
import { connect } from "react-redux";
import Flex from "@rbu/base/lib/flex";

class Content extends Component {
  render() {
    return <Flex full>Content</Flex>;
  }
}

export default connect()(Content);
