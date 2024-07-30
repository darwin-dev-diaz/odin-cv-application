import { useState } from "react";

import EducationField from "./EducationField";
import AddEducationField from "./AddEducationField";

export default function EducationPage({ data, updateData }) {
  const [showEducationField, setShowEducationField] = useState(false);

  return (
    <>
      {showEducationField ? (
        <EducationField
          onSubmitField={() => setShowEducationField(false)}
          onCancel={() => setShowEducationField(false)}
          data={data}
          updateData={updateData}
        />
      ) : (
        <AddEducationField data={data} onAddEducation={() => setShowEducationField(true)} />
      )}
    </>
  );
}
