import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import Store from "./store";
import { ApolloProvider } from "react-apollo";
import client from "./client";

import "@coreui/icons/css/coreui-icons.min.css";
import "flag-icon-css/css/flag-icon.min.css";
import "font-awesome/css/font-awesome.min.css";
import "simple-line-icons/css/simple-line-icons.css";
import "./scss/style.css";
import "./App.css";
import "react-activity/dist/react-activity.css";

ReactDOM.render(
  <Provider store={Store}>
    <ApolloProvider client={client}>
      <App {...this.props} />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
