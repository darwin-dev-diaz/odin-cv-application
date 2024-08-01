import "../../styles/AddInputField.css";
import EditSquare from "../../assets/EditSquare";
import Trash from "../../assets/Trash";

export default function AddExperienceField({
  data,
  updateData,
  setEditID,
  onAddExperience,
}) {
  //  pass in the object that contains the experience information

  function onClick() {
    if (
      data.experienceArr.filter((experience) => experience.filled).length > 2
    ) {
      const button = document.getElementsByClassName("add-field-button")[0];
      button.classList.add("dim-red");
      const counter = document.getElementsByClassName("counter")[0];
      counter.classList.add("dim-red");

      button.addEventListener("animationend", () => {
        button.classList.remove("dim-red");
        counter.classList.remove("dim-red");
      });
    } else {
      onAddExperience();
    }
  }

  function handleDelete(i) {
    // remove the item from the list
    const newExperienceArr = data.experienceArr;
    newExperienceArr.splice(i, 1);
    newExperienceArr.push({ filled: false });

    updateData({ ...data, experienceArr: newExperienceArr });
  }

  function handleEdit(i) {
    // goes to field screen with prefilled values
    setEditID(i);
    onAddExperience();
  }

  const experienceItems = data.experienceArr
    .filter((experience) => experience.filled)
    .map((experience, i) => {
      return (
        <div className="past-info" key={i}>
          {experience.companyName}
          <div className="icon-group">
            <EditSquare
              onClick={() => {
                handleEdit(i);
              }}
            />
            <Trash onClick={() => handleDelete(i)} />
          </div>
        </div>
      );
    });

  return (
    <div className="add-input-field">
      <div className="past-info-container">
        {/* Draw experience objects */}
        {experienceItems.length > 0 ? (
          experienceItems
        ) : (
          <div className="past-info no-entries"> No entries</div>
        )}
      </div>
      <div className="button-counter-container">
        <button className="add-field-button" type="button" onClick={onClick}>
          Add Experience
        </button>
        <div className="counter">
          {data.experienceArr.filter((experience) => experience.filled).length}
          /3
        </div>
      </div>
    </div>
  );
}
