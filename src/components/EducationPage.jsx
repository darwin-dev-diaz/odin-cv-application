import { useState } from "react";

import ExperienceField from "./EducationField";
import AddExperienceField from "./AddEducationField";

export default function EducationPage() {
  const [showEducationField, setShowEducationField] = useState(false);
  return (
    <>
      {showEducationField ? (
        <ExperienceField 
        onSubmitField={()=>setShowEducationField(false)}
        onCancel={()=>setShowEducationField(false)}/>
      ) : (
        <AddExperienceField
          onAddEducation={() => setShowEducationField(true)}
        />
      )}
    </>
  );
}
