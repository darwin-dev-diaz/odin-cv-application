import { useState } from "react";
import AccordionPage from "./AccordionPage";
import PersonalInfoField from "./PersonalInfoField";
import EducationField from "./EducationField";
import ExperienceField from "./ExperienceField";
import AddExperienceField from "./AddExperienceField";
import "../styles/Accordion.css"

export default function Accordion({ children }) {
  const [openID, setOpenID] = useState(0);

  return (
    <div className="accordion-container">
      <AccordionPage
        title="Personal Info"
        open={openID === 0}
        onOpen={()=>setOpenID(0)}
      >
        <PersonalInfoField />
      </AccordionPage>
      <AccordionPage
        title="Education"
        open={openID === 1}
        onOpen={()=>setOpenID(1)}
      >
        <EducationField />
      </AccordionPage>
      <AccordionPage
        title="Experience"
        open={openID === 2}
        onOpen={()=>setOpenID(2)}
      >
        {/* <ExperienceField /> */}
        <AddExperienceField/>
      </AccordionPage>
    </div   >
  );
}
