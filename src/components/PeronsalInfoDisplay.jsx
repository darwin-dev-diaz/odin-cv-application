export default function PersonalInfoDisplay({data}) {

  return <>
  <div className="personal-info-header">
      <h1>Name: {data.personalInfo.name}</h1>
      <h1>Email: {data.personalInfo.email}</h1>
      <h1>Phone Number: {data.personalInfo.phoneNumber}</h1>
      <h1>Address: {data.personalInfo.address}</h1>
    </div></>;
}
