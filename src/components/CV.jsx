import PersonalInfoDisplay from "./PersonalInfo/PeronsalInfoDisplay";
import EducationDisplay from "./Education/EducationDisplay";
import ExperienceDisplay from "./Experience/ExperienceDisplay";
import "../styles/CV.css";

export default function CV({ data }) {
  return (
    <div className="resume">
      <div className="resume-header">
        <h1 className="name">NAME</h1>
        <h3 className="profession">Profession</h3>
      </div>
      <div className="resume-left">
        <div className="resume-left-section">
          <div className="resume-left-section-title">
            ResumeLeftSectionTitle
          </div>
          <hr className="line"></hr>
          <div className="resume-left-subsection">
            <div className="resume-left-subsection-title">Title</div>
            <div className="resume-left-subsection-text">
              test test test test test test test test test test test test test
              test test test test
            </div>
          </div>
          <div className="resume-left-subsection">
            <div className="resume-left-subsection-title">Title</div>
            <div className="resume-left-subsection-text">
              test test test test test test test test test test test test test
              test test test test
            </div>
          </div>
          <div className="resume-left-subsection">
            <div className="resume-left-subsection-title">Title</div>
            <div className="resume-left-subsection-text">
              test test test test test test test test test test test test test
              test test test test
            </div>
          </div>
          <div className="resume-left-subsection">
            <div className="resume-left-subsection-title">Title</div>
            <div className="resume-left-subsection-text">
              test test test test test test test test test test test test test
              test test test test
            </div>
          </div>
        </div>
      </div>
      <div className="resume-right">
        <div className="resume-right-section profile">
          <div className="resume-right-section-title">Profile</div>
          <hr className="line" />
          <div className="resume-right-subsection">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, in
            dicta omnis ipsam dolores unde eos quidem perspiciatis, consequuntur
            velit obcaecati cupiditate inventore molestias quis recusandae
            tempore similique amet tenetur.
          </div>
          <hr className="resume-right-section-line" />
        </div>


        {/* Experience */}
        <div className="resume-right-section experience">
          <div className="resume-right-section-title">Experience</div>
          <hr className="line" />
          <div className="resume-right-subsection experience">
            <div className="experience-container">
              <div className="experience-top-line">
                <div className="experience-title">Programmer, Company</div>
                <div className="experience-location">Clifton, NJ</div>
              </div>
              <div className="experience-date">Dec 2015 - Present</div>
              <div className="experience-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                distinctio nam itaque quod enim. Fugiat provident tenetur aut!
                Itaque esse expedita magni facere dignissimos quos inventore
                maxime error veniam in.
              </div>
            </div>
            <div className="experience-container">
              <div className="experience-top-line">
                <div className="experience-title">Programmer, Company</div>
                <div className="experience-location">Clifton, NJ</div>
              </div>
              <div className="experience-date">Dec 2015 - Present</div>
              <div className="experience-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                distinctio nam itaque quod enim. Fugiat provident tenetur aut!
                Itaque esse expedita magni facere dignissimos quos inventore
                maxime error veniam in.
              </div>
            </div>
            <div className="experience-container">
              <div className="experience-top-line">
                <div className="experience-title">Programmer, Company</div>
                <div className="experience-location">Clifton, NJ</div>
              </div>
              <div className="experience-date">Dec 2015 - Present</div>
              <div className="experience-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                distinctio nam itaque quod enim. Fugiat provident tenetur aut!
                Itaque esse expedita magni facere dignissimos quos inventore
                maxime error veniam in.
              </div>
            </div>
          </div>
          <hr className="resume-right-section-line" />
        </div>

        {/* Education */}
        <div className="resume-right-section education">
          <div className="resume-right-section-title">Education</div>
          <hr className="line" />
          <div className="resume-right-subsection education">
            <div className="education-container">
              <div className="education-top-line">
                <div className="education-title">Nice degree, College</div>
                <div className="education-location">Clifton, NJ</div>
              </div>
              <div className="education-date">Dec 2015 - Dec 2019</div>
            </div>
          </div>
        </div>
      </div>
      {/* <PersonalInfoDisplay data={data} />
      <EducationDisplay data={data}/>
      <ExperienceDisplay data={data}/> */}
    </div>
  );
}
