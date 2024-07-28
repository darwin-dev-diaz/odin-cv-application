import "../styles/InputField.css";
import data from "../data";

export default function PersonalInfoField() {
  return (
    <form>
      <div className="input-group">
        <label htmlFor="full-name">
          <span className="label-text">Full Name</span>
        </label>
        <input
          type="text"
          id="full-name"
          placeholder="First and last name"
          data-key="fullName"
          onChange={(event) => {
            data.personalInfo.name = event.target.value;
          }}
          // value="Darwin Diaz"
        ></input>
      </div>
      <div className="input-group">
        <label htmlFor="email">
          <span className="label-text">Email</span>
          <span className="recommended-text">recommended</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          data-key="email"
          onChange={(event) => {
            data.personalInfo.email = event.target.value;
          }}
          // value="josephine.meyers@mail.co.uk"
        ></input>
      </div>
      <div className="input-group">
        <label htmlFor="phone-number">
          <span className="label-text">Phone number</span>
          <span className="recommended-text">recommended</span>
        </label>
        <input
          type="tel"
          id="phone-number"
          placeholder="Enter phone number"
          data-key="phoneNumber"
          onChange={(event) => {
            data.personalInfo.phoneNumber = event.target.value;
          }}
          // value="+44 3245 5521 5521"
        ></input>
      </div>
      <div className="input-group">
        <label htmlFor="address">
          <span className="label-text">Address</span>
          <span className="recommended-text">recommended</span>
        </label>
        <input
          type="text"
          id="address"
          placeholder="City, Country"
          data-key="address"
          onChange={(event) => {
            data.personalInfo.address = event.target.value;
          }}
          //   value="London, UK"
        ></input>
      </div>
    </form>
  );
}
