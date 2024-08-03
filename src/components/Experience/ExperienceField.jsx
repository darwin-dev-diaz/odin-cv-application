import "../../styles/InputField.css";
import { useEffect, useState } from "react";

export default function ExperienceField({
  data,
  updateData,
  onSubmitField,
  onCancel,
  editID,
  setEditID,
}) {


  console.log(editID)
  const [inputValues, setInputValues] = useState({
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (Number.isInteger(editID)) {
      setInputValues({ ...data.experienceArr[editID] });
    }
  }, [data.experienceArr, editID]);

  function formSubmitEdit(event) {
    event.preventDefault();

    const newExperienceObj = { filled: true, ...inputValues };

    // create newEducationObj
    const newExperienceArr = data.experienceArr;
    newExperienceArr[editID] = newExperienceObj;

    // fill the educationArr at the right index with the formObject
    updateData({
      ...data,
      experienceArr: newExperienceArr,
    });

    // switch back to add field page
    setEditID(null);
    onSubmitField();
  }
  function formSubmit(event) {
    event.preventDefault();

    // get the index of the first non filled education object
    const index = data.experienceArr.findIndex(
      (experience) => !experience.filled
    );
    const newExperienceObj = { filled: true, ...inputValues };

    // create newEducationObj
    const newExperienceArr = data.experienceArr;
    newExperienceArr[index] = newExperienceObj;

    // fill the educationArr at the right index with the formObject
    updateData({
      ...data,
      experienceArr: newExperienceArr,
    });

    // switch back to add field page
    onSubmitField();
  }

  return (
    <form onSubmit={Number.isInteger(editID) ? formSubmitEdit : formSubmit}>
      <div className="input-group">
        <label htmlFor="company-name">
          <span className="label-text">Company Name</span>
        </label>
        <input
          type="text"
          id="company-name"
          placeholder="Enter Company"
          data-key="companyName"
          name="companyName"
          value={inputValues.companyName}
          onChange={(event) => {
            setInputValues({ ...inputValues, companyName: event.target.value });
          }}
        ></input>
      </div>
      <div className="input-group">
        <label htmlFor="position-title">
          <span className="label-text">Position Title</span>
        </label>
        <input
          type="text"
          id="position-title"
          placeholder="Enter Position Title"
          data-key="positionTitle"
          name="position"
          value={inputValues.position}
          onChange={(event) => {
            setInputValues({ ...inputValues, position: event.target.value });
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
            id="date"
            placeholder="Enter Start Date"
            data-key="startDate"
            name="startDate"
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
            id="date"
            placeholder="Enter End Date"
            data-key="endDate"
            name="endDate"
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
          placeholder="Enter Location"
          data-key="location"
          name="location"
          value={inputValues.location}
          onChange={(event) => {
            setInputValues({ ...inputValues, location: event.target.value });
          }}
        ></input>
      </div>
      <div className="input-group">
        <label htmlFor="description">
          <span className="label-text">Description</span>
          {/* <span className="optional-text">optional</span> */}
        </label>
        <textarea
          id="description"
          rows={10}
          placeholder="Enter Description"
          data-key="description"
          value={inputValues.description}
          onChange={(event) => {
            setInputValues({ ...inputValues, description: event.target.value });
          }}
        ></textarea>
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
