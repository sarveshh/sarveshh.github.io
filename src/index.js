import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";
import MouseContextProvider from "./context/mouse-context";
import { Provider } from "react-redux";
import store from "./store/store";

const globalStyle = {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    cursor: "none",
  },

  // Add theme transition classes
  // transition: "all 750ms !important",
  // transitionDelay: "0 !important",
};

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <MouseContextProvider>
        <GlobalStyles styles={globalStyle} />
        <App />
      </MouseContextProvider>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);
