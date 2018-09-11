import React, { Component } from "react";
import { connect } from "react-redux";
import Flex from "@react-alpha/base.flex";

class Topbar extends Component {
  render() {
    return <Flex>topbar</Flex>;
  }
}

export default connect()(Topbar);
