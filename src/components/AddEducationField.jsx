import "../styles/AddInputField.css";
import EditSquare from "../assets/EditSquare"
import Trash from "../assets/Trash"

export default function AddEducationField({onAddEducation}) {
  //  pass in the object that contains the experience information

  function makePastInfo() {}

  return (
    <div className="add-input-field">
      <div className="past-info-container">
        <div className="past-info">School one
            <div className="icon-group">
                <EditSquare/>
                <Trash/>
            </div>
        </div>
        <div className="past-info">School two
            <div className="icon-group">
                <EditSquare/>
                <Trash/>
            </div>
        </div>
        {/* have a function here that converts the object to a thing */}
      </div>
      <button className="add-field-button" type="button" onClick={onAddEducation}>Add Education</button>
    </div>
  );
}
