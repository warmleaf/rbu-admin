import React, { Component } from "react";
import { connect } from "react-redux";
import Flex from "@rbu/base/lib/flex";

class Topbar extends Component {
  render() {
    return <Flex h="38px">topbar</Flex>;
  }
}

export default connect()(Topbar);
