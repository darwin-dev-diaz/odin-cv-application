import "../../styles/InputField.css";

export default function ExperienceField({ onSubmitField, onCancel }) {
  

  return (
    <form>
      <div className="input-group">
        <label for="company-name">
          <span class="label-text">Company Name</span>
        </label>
        <input
          type="text"
          id="company-name"
          placeholder="Enter Company"
          data-key="companyName"
          // value="Darwin Diaz"
        ></input>
      </div>
      <div className="input-group">
        <label for="position-title">
          <span class="label-text">Position Title</span>
        </label>
        <input
          type="text"
          id="position-title"
          placeholder="Enter Position Title"
          data-key="positionTitle"
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
      <div class="input-group">
        <label for="description">
          <span class="label-text">Description</span>
          {/* <span class="optional-text">optional</span> */}
        </label>
        <textarea
          id="description"
          rows={10}
          placeholder="Enter Description"
          data-key="description"
        ></textarea>
      </div>

      <div className="button-container">
        <button className="cancel-button" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="save-button" type="button" onClick={onSubmitField}>
          Save
        </button>
      </div>
    </form>
  );
}
