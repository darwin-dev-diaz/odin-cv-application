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
    educationArr: [{ filled: false }, { filled: false }, { filled: false }],
    experienceArr: [{ filled: false }, { filled: false }, { filled: false }],
  });
  return (
    <div className="app">
      <Accordion data={data} updateData={setData} />
      <CV data={data} />
    </div>
  );
}
