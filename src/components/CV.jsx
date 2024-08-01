import PersonalInfoDisplay from "./PersonalInfo/PeronsalInfoDisplay";
import EducationDisplay from "./Education/EducationDisplay";
import ExperienceDisplay from "./Experience/ExperienceDisplay";
import "../styles/CV.css";

export default function CV({ data }) {
  const experienceElements = data.experienceArr
    .filter((experience) => experience.filled)
    .map((experience, i) => {
      return (
        <div className="experience-container" key={i}>
          <div className="experience-top-line">
            <div className="experience-title">
              {experience.position}, {experience.companyName}
            </div>
            <div className="experience-location">{experience.location}</div>
          </div>
          <div className="experience-date">
            {experience.startDate} - {experience.endDate}
          </div>
          <div className="experience-description">{experience.description}</div>
        </div>
      );
    });

  const educationElements = data.educationArr
    .filter((education) => education.filled)
    .map((education, i) => {
      return (
        <div className="education-container" key={i}>
          <div className="education-top-line">
            <div className="education-title">
              {education.degree}, {education.schoolName}
            </div>
            <div className="education-location">{education.location}</div>
          </div>
          <div className="education-date">
            {education.startDate} - {education.endDate}
          </div>
        </div>
      );
    });

  return (
    <div className="resume">
      <div className="resume-header">
        <h1 className="name">{data.personalInfo.name}</h1>
        <h3 className="profession">{data.personalInfo.profession}</h3>
      </div>
      <div className="resume-left">
        <div className="resume-left-section">
          <div className="resume-left-section-title letter-spacing-title">DETAILS</div>
          <hr className="line"></hr>
          <div className="resume-left-subsection">
            <div className="resume-left-subsection-title letter-spacing-subtitle">ADDRESS</div>
            <div className="resume-left-subsection-text">
              {data.personalInfo.address}
            </div>
          </div>
          <div className="resume-left-subsection">
            <div className="resume-left-subsection-title letter-spacing-subtitle">PHONE</div>
            <div className="resume-left-subsection-text">
              {data.personalInfo.phoneNumber}
            </div>
          </div>
          <div className="resume-left-subsection">
            <div className="resume-left-subsection-title letter-spacing-subtitle">EMAIL</div>
            <div className="resume-left-subsection-text">
              {data.personalInfo.email}
            </div>
          </div>
        </div>
      </div>
      <div className="resume-right">
        <div className="resume-right-section profile">
          <div className="resume-right-section-title letter-spacing-title">PROFILE</div>
          <hr className="line" />
          <div className="resume-right-subsection">
            {data.personalInfo.profile}
          </div>
          <hr className="resume-right-section-line" />
        </div>

        {/* Experience */}
        <div className="resume-right-section experience">
          <div className="resume-right-section-title letter-spacing-title">EXPERIENCE</div>
          <hr className="line" />
          <div className="resume-right-subsection experience">
            {experienceElements}
          </div>
          <hr className="resume-right-section-line" />
        </div>

        {/* Education */}
        <div className="resume-right-section education">
          <div className="resume-right-section-title letter-spacing-title">EDUCATION</div>
          <hr className="line" />
          <div className="resume-right-subsection education">
            {educationElements}
          </div>
        </div>
      </div>
      {/* <PersonalInfoDisplay data={data} />
      <EducationDisplay data={data}/>
      <ExperienceDisplay data={data}/> */}
    </div>
  );
}
