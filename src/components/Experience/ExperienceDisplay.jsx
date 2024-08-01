import "../../styles/Displays.css";

export default function ExperienceDisplay({ data }) {
  const experienceDisplayList = data.experienceArr
    .filter((experience) => experience.filled)
    .map((experience, i) => {
      return (
        <div className="experience-display" key={i}>
          <h1>Company: {experience.companyName}</h1>
          <h1>Position: {experience.position}</h1>
          <h1>Start Date: {experience.startDate}</h1>
          <h1>End Date: {experience.endDate}</h1>
          <h1>Location: {experience.location}</h1>
          <h1>Description: {experience.description}</h1>
        </div>
      );
    });
  return (
    <>
      <h1>EXPERIENCE</h1>
      {experienceDisplayList}
    </>
  );
}
