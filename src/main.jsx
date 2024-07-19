import React from "react";
import ReactDOM from "react-dom/client";
import AccordionPage from "./components/AccordionPage";
import PersonalInfoField from "./components/PersonalInfoField";
import "./styles/reset.css";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <AccordionPage title="Personal Info">
      <PersonalInfoField />
    </AccordionPage>
    <AccordionPage title="Education">
      <PersonalInfoField />
    </AccordionPage>
    <AccordionPage title="Experience">
      <PersonalInfoField />
    </AccordionPage>
  </React.StrictMode>
);
