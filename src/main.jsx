import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx"; // Import the main App component
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* App contains Navbar + Routes */}
    </BrowserRouter>
  </React.StrictMode>
);
