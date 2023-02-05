import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./style/main.scss";
import { ConnectionTest } from "./python";

// Test eel
window.onload = async () => {
  let print = await ConnectionTest();
  console.log(print);
};

const root = createRoot(document.getElementById("main"));
root.render(<App />);
