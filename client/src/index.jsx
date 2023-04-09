import React, { StrictMode } from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom";

const container = createRoot(document.getElementById("root"));

container.render(
  <StrictMode>
    <App />
  </StrictMode>
);
