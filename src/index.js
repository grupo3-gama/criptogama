import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Mudarmoeda from "./Config/Mudarmoeda";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Mudarmoeda>
      <App />
    </Mudarmoeda>
  </React.StrictMode>
);
