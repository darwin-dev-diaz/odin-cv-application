import { useState } from "react";
import Accordion from "./Accordion";
import CV from "./CV";
import "../styles/reset.css";
import "../styles/App.css";

export default function App() {
  const [data, setData] = useState({
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
        startDate: "September, 2016",
        endDate: "May, 2018",
      },
      {
        filled: true,
        schoolName: "Rivertown University",
        location: "Rivertown, NY",
        degree: "Bachelor of Science in Statistics",
        startDate: "September, 2012",
        endDate: "May, 2016",
      },
    ],
    experienceArr: [
      {
        filled: true,
        companyName: "Data Insights LLC",
        location: "New York, NY",
        position: "Senior Data Analyst",
        startDate: "June, 2020",
        endDate: "Present",
        description:
          "Lead data analysis projects, providing insights and recommendations based on data trends. Developed complex data models and visualizations using Python and Tableau.",
      },
      {
        filled: true,
        companyName: "Analytics Pro Inc.",
        location: "New York, NY",
        position: "Data Analyst",
        startDate: "July, 2018",
        endDate: "May, 2020",
        description:
          "Performed data mining, cleaning, and analysis to support business decisions. Created dashboards and reports to visualize key metrics using SQL and Power BI.",
      },
      {
        filled: true,
        companyName: "Tech Data Corp.",
        location: "Rivertown, NY",
        position: "Data Analyst Intern",
        startDate: "June, 2017",
        endDate: "August, 2017",
        description:
          "Assisted in data collection and preprocessing. Conducted exploratory data analysis and contributed to the development of predictive models.",
      },
    ],
  });
  return (
    <div className="app">
      <Accordion data={data} updateData={setData} />
      <CV data={data} />
    </div>
  );
}
