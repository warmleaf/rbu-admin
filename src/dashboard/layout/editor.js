import React, { Component } from "react";
import { injectGlobal } from "styled-components";
import { connect } from "react-redux";
import Flex from "@rbu/base/lib/flex";
import Topbar from "../topbar";
import Navication from "../navigation";
import Content from "../content";

injectGlobal`
#admin {
  display: flex;
}
`;

class Layout extends Component {
  render() {
    return [
      <Navication />,
      <Flex full column>
        <Topbar />
        <Content />
      </Flex>
    ];
  }
}

export default connect()(Layout);
