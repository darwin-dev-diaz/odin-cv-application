import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./components/Accordion";
import CV from "./components/CV";
import "./styles/reset.css";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="app">

    <Accordion>
    </Accordion>
    <CV>
    </CV>
    </div>
    
  </React.StrictMode>
);
