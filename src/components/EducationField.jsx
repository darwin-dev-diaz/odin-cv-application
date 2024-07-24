import "../styles/InputField.css";

export default function EducationField() {
  return (
    <form>
      <div className="input-group">
        <label for="school-name">
          <span class="label-text">School</span>
        </label>
        <input
          type="text"
          id="school-name"
          placeholder="Enter University"
          data-key="schoolName"
          // value="Darwin Diaz"
        ></input>
      </div>
      <div className="input-group">
        <label for="degree">
          <span class="label-text">Degree</span>
        </label>
        <input
          type="text"
          id="degree"
          placeholder="Enter Degree or Field of Study"
          data-key="degree"
          // value="Darwin Diaz"
        ></input>
      </div>
      <div className="dates-group">
        <div class="input-group">
          <label for="date">
            <span class="label-text">Start Date</span>
          </label>
          <input
            type="text"
            id="date"
            placeholder="Enter Start Date"
            data-key="startDate"
            // value=""
          />
        </div>
        <div class="input-group">
          <label for="date">
            <span class="label-text">End Date</span>
          </label>
          <input
            type="text"
            id="date"
            placeholder="Enter End Date"
            data-key="endDate"
            // value=""
          />
        </div>
      </div>
      <div className="input-group">
        <label for="location">
          <span class="label-text">Location</span>
        </label>
        <input
          type="text"
          id="location"
          placeholder="Enter Location"
          data-key="location"
          // value="Darwin Diaz"
        ></input>
      </div>
    </form>
  );
}
