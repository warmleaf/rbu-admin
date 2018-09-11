import React, { Component } from "react";
import { connect } from "react-redux";
import Flex from "@rbu/base/lib/flex";

class Navication extends Component {
  render() {
    return <Flex w="200px">navication</Flex>;
  }
}

export default connect()(Navication);
