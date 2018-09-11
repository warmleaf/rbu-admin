import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import store from "./dashboard/store";
import theme from "./assets/theme";
import zh from "./assets/i18n/zh-cn";
import registerServiceWorker from "./dashboard/registerServiceWorker";
import "./index.css";
import Layout from "./dashboard/layout/editor";

ReactDOM.render(
  <Provider store={store()}>
    <ThemeProvider theme={theme}>
      <IntlProvider locale={navigator.language}>
        <Layout />
      </IntlProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("admin")
);
registerServiceWorker();
