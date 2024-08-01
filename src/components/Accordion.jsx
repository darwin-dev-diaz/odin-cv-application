import { useState } from "react";
import AccordionPage from "./AccordionPage";
import PersonalInfoField from "./PersonalInfo/PersonalInfoField";
import EducationPage from "./Education/EducationPage";
import ExperiencePage from "./Experience/ExperiencePage";
import "../styles/Accordion.css";

export default function Accordion({data, updateData}) {
  const [openID, setOpenID] = useState(0);

  function handleAccordionOpen(id) {
    if (openID === id) {
      setOpenID(4);
    } else {
      setOpenID(id);
    }
  }

  return (
    <div className="accordion-container">
      <AccordionPage
        title="Personal Info"
        open={openID === 0}
        onOpen={() => handleAccordionOpen(0)}
      >
        <PersonalInfoField data={data} updateData={updateData}/>
      </AccordionPage>
      <AccordionPage
        title="Education"
        open={openID === 1}
        onOpen={() => handleAccordionOpen(1)}
      >
        <EducationPage data={data} updateData={updateData}/>
      </AccordionPage>
      <AccordionPage
        title="Experience"
        open={openID === 2}
        onOpen={() => handleAccordionOpen(2)}
      >
        <ExperiencePage />
      </AccordionPage>
    </div>
  );
}
