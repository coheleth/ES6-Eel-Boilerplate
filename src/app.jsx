import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./pages/home";

export const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </HashRouter>
);
