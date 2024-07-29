import PersonalInfoDisplay from "./PeronsalInfoDisplay";

export default function CV({data, updateData}) {
  return (
    <>
      <PersonalInfoDisplay data={data} updateData={updateData}/>
    </>
  );
}
