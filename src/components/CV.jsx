import PersonalInfoDisplay from "./PersonalInfo/PeronsalInfoDisplay";
import EducationDisplay from "./Education/EducationDisplay";

export default function CV({data, updateData}) {
  return (
    <>
      <PersonalInfoDisplay data={data} />
      <EducationDisplay data={data}/>
    </>
  );
}
