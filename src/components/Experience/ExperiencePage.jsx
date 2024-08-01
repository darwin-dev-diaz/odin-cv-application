import { useState } from "react";

import ExperienceField from "./ExperienceField";
import AddExperienceField from "./AddExperienceField";

export default function ExperiencePage() {
  const [showExperienceField, setShowExperienceField] = useState(false);
  return (
    <>
      {showExperienceField ? (
        <ExperienceField 
        onSubmitField={()=>setShowExperienceField(false)}
        onCancel={()=>setShowExperienceField(false)}/>
      ) : (
        <AddExperienceField
          onAddExperience={() => setShowExperienceField(true)}
        />
      )}
    </>
  );
}
