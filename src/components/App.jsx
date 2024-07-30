import { useState } from "react";
import Accordion from "./Accordion";
import CV from "./CV";
import "../styles/reset.css";
import "../styles/App.css";

export default function App() {
  const [data, setData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
    educationArr: [],
    experience: {
      experienceOne: {},
      experienceTwo: {},
      experienceThree: {},
    },
  });
  return (
    <div className="app">
      <Accordion data={data} updateData={setData} />
      <CV data={data} />
    </div>
  );
}
