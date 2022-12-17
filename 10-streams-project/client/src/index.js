// ReactDOM.render is no longer supported in React 18. Use createRoot instead.

import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";

const container = document.querySelector("#root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
