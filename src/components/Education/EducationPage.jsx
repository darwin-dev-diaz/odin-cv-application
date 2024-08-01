import { useState } from "react";

import EducationField from "./EducationField";
import AddEducationField from "./AddEducationField";

export default function EducationPage({ data, updateData }) {
  const [showEducationField, setShowEducationField] = useState(false);
  const [editID, setEditID] = useState(null);

  return (
    <>
      {showEducationField ? (
        <EducationField
          onSubmitField={() => setShowEducationField(false)}
          onCancel={() => setShowEducationField(false)}
          data={data}
          updateData={updateData}
          editID={editID}
          setEditID={setEditID}
        />
      ) : (
        <AddEducationField
          data={data}
          updateData={updateData}
          onAddEducation={() => setShowEducationField(true)}
          setEditID={setEditID}
        />
      )}
    </>
  );
}
