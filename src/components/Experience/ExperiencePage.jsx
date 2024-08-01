import { useState } from "react";

import ExperienceField from "./ExperienceField";
import AddExperienceField from "./AddExperienceField";

export default function ExperiencePage({ data, updateData }) {
  const [showExperienceField, setShowExperienceField] = useState(false);
  const [editID, setEditID] = useState(null);

  return (
    <>
      {showExperienceField ? (
        <ExperienceField
          onSubmitField={() => setShowExperienceField(false)}
          onCancel={() => setShowExperienceField(false)}
          data={data}
          updateData={updateData}
          editID={editID}
          setEditID={setEditID}
        />
      ) : (
        <AddExperienceField
          onAddExperience={() => setShowExperienceField(true)}
          data={data}
          updateData={updateData}
          setEditID={setEditID}
        />
      )}
    </>
  );
}
