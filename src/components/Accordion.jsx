import { useState } from "react";
import AccordionPage from "./AccordionPage";
import PersonalInfoField from "./PersonalInfo/PersonalInfoField";
import EducationPage from "./Education/EducationPage";
import ExperiencePage from "./Experience/ExperiencePage";
import "../styles/Accordion.css";

export default function Accordion({ data, updateData }) {
  const [openID, setOpenID] = useState(0);

  function handleAccordionOpen(id) {
    if (openID === id) {
      setOpenID(4);
    } else {
      setOpenID(id);
    }
  }

  function handleClearForm() {
    updateData({
      personalInfo: {
        name: "",
        profession: "",
        email: "",
        phoneNumber: "",
        address: "",
        profile: "",
      },
      educationArr: [{ filled: false }, { filled: false }, { filled: false }],
      experienceArr: [{ filled: false }, { filled: false }, { filled: false }],
    });
  }
  function handleFillForm() {
    updateData({
      personalInfo: {
        name: "Darwin Doe",
        profession: "Data Analyst",
        email: "darwin.doe@example.com",
        phoneNumber: "555-987-6543",
        address: "456 Oak Avenue, Rivertown, NY 10001",
        profile:
          "Detail-oriented Data Analyst with 4+ years of experience in interpreting and analyzing data to drive successful business solutions.",
      },
      educationArr: [
        {
          filled: true,
          schoolName: "Rivertown University",
          location: "Rivertown, NY",
          degree: "Master of Science in Data Science",
          startDate: "2016-09-01",
          endDate: "2018-05-15",
        },
        {
          filled: true,
          schoolName: "Rivertown University",
          location: "Rivertown, NY",
          degree: "Bachelor of Science in Statistics",
          startDate: "2012-09-01",
          endDate: "2016-05-15",
        },
      ],
      experienceArr: [
        {
          filled: true,
          companyName: "Data Insights LLC",
          location: "New York, NY",
          position: "Senior Data Analyst",
          startDate: "2020-06-01",
          endDate: "Present",
          description:
            "Lead data analysis projects, providing insights and recommendations based on data trends. Developed complex data models and visualizations using Python and Tableau.",
        },
        {
          filled: true,
          companyName: "Analytics Pro Inc.",
          location: "New York, NY",
          position: "Data Analyst",
          startDate: "2018-07-01",
          endDate: "2020-05-31",
          description:
            "Performed data mining, cleaning, and analysis to support business decisions. Created dashboards and reports to visualize key metrics using SQL and Power BI.",
        },
        {
          filled: true,
          companyName: "Tech Data Corp.",
          location: "Rivertown, NY",
          position: "Data Analyst Intern",
          startDate: "2017-06-01",
          endDate: "2017-08-31",
          description:
            "Assisted in data collection and preprocessing. Conducted exploratory data analysis and contributed to the development of predictive models.",
        },
      ],
    });
  }

  return (
    <div className="accordion-container">
      <div className="button-container">
        <button className="fill-form-button" onClick={handleFillForm}>
          Fill Form
        </button>
        <button className="clear-form-button" onClick={handleClearForm}>
          Clear Form
        </button>
      </div>
      <AccordionPage
        title="Personal Info"
        open={openID === 0}
        onOpen={() => handleAccordionOpen(0)}
      >
        <PersonalInfoField data={data} updateData={updateData} />
      </AccordionPage>
      <AccordionPage
        title="Education"
        open={openID === 1}
        onOpen={() => handleAccordionOpen(1)}
      >
        <EducationPage data={data} updateData={updateData} />
      </AccordionPage>
      <AccordionPage
        title="Experience"
        open={openID === 2}
        onOpen={() => handleAccordionOpen(2)}
      >
        <ExperiencePage data={data} updateData={updateData} />
      </AccordionPage>
    </div>
  );
}
