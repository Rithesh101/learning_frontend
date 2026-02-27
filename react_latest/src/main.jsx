import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./components/App";

const container = document.getElementById("root");

const root = createRoot(container);

const name = "rithesh";

root.render(<App/>)