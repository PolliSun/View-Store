import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { HashRouter } from "react-router-dom";
import store from "./services/store";
import { Provider } from "react-redux";
import App from "./components/app/app";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
