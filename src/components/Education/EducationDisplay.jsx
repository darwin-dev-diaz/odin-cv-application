import "../../styles/Displays.css";

export default function EducationDisplay({ data }) {
  const educationDisplayList = data.educationArr
    .filter((education) => education.filled)
    .map((education, i) => {
      return (
        <div className="education-display" key={i}>
          <h1>School: {education.schoolName}</h1>
          <h1>Degree: {education.degree}</h1>
          <h1>Start Date: {education.startDate}</h1>
          <h1>End Date: {education.endDate}</h1>
          <h1>Location: {education.location}</h1>
        </div>
      );
    });
  return (
    <>
      <h1>EDUCATION</h1>
      {educationDisplayList}
    </>
  );
}
