import { useState } from "react";
import Accordion from "./Accordion";
import CV from "./CV";

export default function PapaApp() {
  const [data, setData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
    education: {
      educationOne: {},
      educationTwo: {},
      educationThree: {},
    },
    experience: {
      experienceOne: {},
      experienceTwo: {},
      experienceThree: {},
    },
  });
  return (
    <>
      <Accordion data={data} updateData={setData} />
      <CV data={data} />
    </>
  );
}
