import "../../styles/InputField.css";
import { useEffect, useState } from "react";

export default function EducationField({
  data,
  updateData,
  onSubmitField,
  onCancel,
  editID,
  setEditID,
}) {
  const [inputValues, setInputValues] = useState({
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  useEffect(() => {
    if (Number.isInteger(editID)) {
      setInputValues({ ...data.educationArr[editID] });
    }
  }, []);

  function formSubmitEdit(event) {
    event.preventDefault();

    const newEducationObj = { filled: true, ...inputValues };

    // create newEducationObj
    const newEducationArr = data.educationArr;
    newEducationArr[editID] = newEducationObj;

    // fill the educationArr at the right index with the formObject
    updateData({
      ...data,
      educationArr: newEducationArr,
    });

    // switch back to add field page
    setEditID(null);
    onSubmitField();

  }
  function formSubmit(event) {
    event.preventDefault();

    // get the index of the first non filled education object
    const index = data.educationArr.findIndex((education) => !education.filled);
    const newEducationObj = { filled: true, ...inputValues };

    // create newEducationObj
    const newEducationArr = data.educationArr;
    newEducationArr[index] = newEducationObj;

    // fill the educationArr at the right index with the formObject
    updateData({
      ...data,
      educationArr: newEducationArr,
    });

    // switch back to add field page
    onSubmitField();
  }

  return (
    <form onSubmit={Number.isInteger(editID) ? formSubmitEdit : formSubmit}>
      <div className="input-group">
        <label htmlFor="school-name">
          <span className="label-text">School</span>
        </label>
        <input
          type="text"
          id="school-name"
          name="schoolName"
          placeholder="Enter University"
          data-key="schoolName"
          value={inputValues.schoolName}
          onChange={(event) => {
            setInputValues({ ...inputValues, schoolName: event.target.value });
          }}
        ></input>
      </div>
      <div className="input-group">
        <label htmlFor="degree">
          <span className="label-text">Degree</span>
        </label>
        <input
          type="text"
          id="degree"
          name="degree"
          placeholder="Enter Degree or Field of Study"
          data-key="degree"
          value={inputValues.degree}
          onChange={(event) => {
            setInputValues({ ...inputValues, degree: event.target.value });
          }}
        ></input>
      </div>
      <div className="dates-group">
        <div className="input-group">
          <label htmlFor="date">
            <span className="label-text">Start Date</span>
          </label>
          <input
            type="text"
            id="start-date"
            name="startDate"
            placeholder="Enter Start Date"
            data-key="startDate"
            value={inputValues.startDate}
            onChange={(event) => {
              setInputValues({ ...inputValues, startDate: event.target.value });
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="date">
            <span className="label-text">End Date</span>
          </label>
          <input
            type="text"
            id="end-date"
            name="endDate"
            placeholder="Enter End Date"
            data-key="endDate"
            value={inputValues.endDate}
            onChange={(event) => {
              setInputValues({ ...inputValues, endDate: event.target.value });
            }}
          />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="location">
          <span className="label-text">Location</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter Location"
          data-key="location"
          value={inputValues.location}
          onChange={(event) => {
            setInputValues({ ...inputValues, location: event.target.value });
          }}
        ></input>
      </div>

      <div className="button-container">
        <button className="cancel-button" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="save-button" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}
