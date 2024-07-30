import "../styles/AddInputField.css";
import EditSquare from "../assets/EditSquare";
import Trash from "../assets/Trash";

export default function AddEducationField({ data, onAddEducation }) {
  //  pass in the object that contains the experience information

  function onClick() {
    if (data.educationArr.length > 2) {
      const button = document.getElementsByClassName("add-field-button")[0];
      button.classList.add("dim-red");
      const counter = document.getElementsByClassName("counter")[0];
      counter.classList.add("dim-red");

      button.addEventListener("animationend", () => {
        button.classList.remove("dim-red");
        counter.classList.remove("dim-red");
      });
    } else {
      onAddEducation();
    }
  }

  const educationItems = data.educationArr.map((education, i) => {
    return (
      <div className="past-info" key={i}>
        {education.schoolName}
        <div className="icon-group">
          <EditSquare />
          <Trash />
        </div>
      </div>
    );
  });

  return (
    <div className="add-input-field">
      <div className="past-info-container">
        {educationItems.length > 0 ? (
          educationItems
        ) : (
          <div className="past-info no-entries"> No entries
          </div>
        )}
      </div>
      <div className="button-counter-container">
        <button className="add-field-button" type="button" onClick={onClick}>
          Add Education
        </button>
        <div className="counter">{data.educationArr.length}/3</div>
      </div>
    </div>
  );
}
