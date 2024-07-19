<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import AccordionPage from "./components/AccordionPage";
import PersonalInfoField from "./components/PersonalInfoField";
import "./styles/reset.css";
import "./styles/main.css";
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import AccordianPage  from './components/AccordianPage'
import PersonalInfoField from './components/PersonalInfoField'
import "./styles/reset.css"
import "./styles/main.css"
>>>>>>> b9a87607ce34db496e17b7f017328eb6f4f73552

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD

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
=======
    <AccordianPage 
      title="Personal Info">
        <PersonalInfoField />
      </AccordianPage>
  </React.StrictMode>,
)
>>>>>>> b9a87607ce34db496e17b7f017328eb6f4f73552
