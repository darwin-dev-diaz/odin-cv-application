import PersonalInfoDisplay from "./PersonalInfo/PeronsalInfoDisplay";
import EducationDisplay from "./Education/EducationDisplay";
import ExperienceDisplay from "./Experience/ExperienceDisplay";

export default function CV({data}) {
  return (
    <>
      <PersonalInfoDisplay data={data} />
      <EducationDisplay data={data}/>
      <ExperienceDisplay data={data}/>
    </>
  );
}
