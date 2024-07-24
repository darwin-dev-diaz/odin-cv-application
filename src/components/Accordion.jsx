import { useState } from "react";
import AccordionPage from "./AccordionPage";
import PersonalInfoField from "./PersonalInfoField";

export default function Accordion({ children }) {
  const [openID, setOpenID] = useState(0);

  return (
    <>
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
        <PersonalInfoField />
      </AccordionPage>
      <AccordionPage
        title="Experience"
        open={openID === 2}
        onOpen={()=>setOpenID(2)}
      >
        <PersonalInfoField />
      </AccordionPage>
    </>
  );
}
