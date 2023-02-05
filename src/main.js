import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

import { connectionTest, print } from "./python";
import { setTitle } from "./utils";
import "./style/main.scss";

// Test eel
window.onload = async () => {
  console.log(await connectionTest());
  setTitle("Test");
  print("Python console print check");
};

const root = createRoot(document.getElementById("main"));
root.render(<App />);
