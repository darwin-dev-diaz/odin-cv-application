import "../../styles/AddInputField.css";
import EditSquare from "../../assets/EditSquare";
import Trash from "../../assets/Trash";

export default function AddEducationField({ data, updateData, setEditID, onAddEducation }) {
  //  pass in the object that contains the experience information

  function onClick() {
    if (data.educationArr.filter((education) => education.filled).length > 1) {
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

  function handleDelete(i) {
    // remove the item from the list
    const newEducationArr = data.educationArr;
    newEducationArr.splice(i, 1)
    newEducationArr.push({filled: false});

    updateData({...data, educationArr: newEducationArr});
  }

  function handleEdit(i) {
    // goes to field screen with prefilled values
    setEditID(i);
    onAddEducation();
  }

  const educationItems = data.educationArr
    .filter((education) => education.filled)
    .map((education, i) => {
      return (
        <div className="past-info" key={i}>
          {education.schoolName}
          <div className="icon-group">
            <EditSquare onClick={()=>{handleEdit(i)}}/>
            <Trash onClick={()=>handleDelete(i)}/>
          </div>
        </div>
      );
    });

  return (
    <div className="add-input-field">
      <div className="past-info-container">
        {/* Draw education objects */}
        {educationItems.length > 0 ? (
          educationItems
        ) : (
          <div className="past-info no-entries"> No entries</div>
        )}
      </div>
      <div className="button-counter-container">
        <button className="add-field-button" type="button" onClick={onClick}>
          Add Education
        </button>
        <div className="counter">{data.educationArr.filter((education) => education.filled).length}/2</div>
      </div>
    </div>
  );
}
