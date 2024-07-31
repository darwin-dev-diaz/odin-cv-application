import "../styles/InputField.css";
import { useState } from "react";

// { EDUCATION DATA FORMAT
//   filled: false,
//   schoolName: "1",
//   degree: "",
//   startDate: "",
//   endDate: "",
//   location: "",
// }

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

  if (Number.isInteger(editID)) {
    console.log("this ran edit");
    setInputValues({ ...data.educationArr[editID] });
    setEditID(null);
  }
  console.log("this ran");

  function formSubmit(event) {
    event.preventDefault();

    // get the index of the first non filled education object
    const index = data.educationArr.findIndex((education) => !education.filled);

    // convert form data to object
    // const formData = new FormData(event.target);
    // const formObject = Object.fromEntries(formData.entries());
    // const newEducationObj = { filled: true, ...formObject };

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

  function formSubmitEdit(event) {
    // Do this one when the editID isn't null
    event.preventDefault();

    // get the index of the first non filled education object
    const index = data.educationArr.findIndex((education) => !education.filled);

    // convert form data to object
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    const newEducationObj = { filled: true, ...formObject };

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
    <form onSubmit={formSubmit}>
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
          // value={editID ? data.educationArr[editID].schoolName : ""}
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
