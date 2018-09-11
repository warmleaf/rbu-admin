import React, { Component } from "react";
import { injectGlobal } from "styled-components";
import { connect } from "react-redux";
import Flex from "@react-alpha/base.flex";
import Topbar from "../topbar";
import Navication from "../navigation";
import Content from "../content";

injectGlobal`
#admin {
  display: flex;
  flex-direction: column;
}
`;

class Layout extends Component {
  render() {
    return [
      <Topbar />,
      <Flex full>
        <Navication />
        <Content />
      </Flex>
    ];
  }
}

export default connect()(Layout);
