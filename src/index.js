import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Add from "./components/Add";
import Watched from "./pages/Watched";
import WathchList from "./pages/WathchList";
import ContextProvider from "./components/context/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/add" element={<Add />} />
          <Route path="/watch" element={<Watched />} />
          <Route path="/watchlist" element={<WathchList />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ContextProvider>
);
