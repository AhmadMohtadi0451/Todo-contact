import "./App.css";
import Router from "./Router/Router";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store/Store";
function App() {
  return (
    <React.Fragment>
      <Provider store={Store}>
        <RouterProvider router={Router} />
      </Provider>
    </React.Fragment>
  );
}

export default App;
