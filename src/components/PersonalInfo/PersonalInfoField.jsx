import "../../styles/InputField.css";

export default function PersonalInfoField({ data, updateData }) {
  function setChangeAndValue(nameVal) {
    return {
      onChange: (event) => {
        updateData({
          ...data,
          personalInfo: {
            ...data.personalInfo,
            [nameVal]: event.target.value,
          },
        });
      },
      value: data.personalInfo[nameVal],
    };
  }

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
          {...setChangeAndValue("name")}
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
          {...setChangeAndValue("email")}
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
          {...setChangeAndValue("phoneNumber")}
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
          {...setChangeAndValue("address")}
        ></input>
      </div>
      <div className="input-group">
        <label htmlFor="profile">
          <span className="label-text">Profile</span>
          <span className="recommended-text">recommended</span>
        </label>
        <textarea
          type="text"
          rows={10}
          id="address"
          placeholder="A short summary of your skills and professional experience"
          data-key="address"
          {...setChangeAndValue("profile")}
        ></textarea>
      </div>
    </form>
  );
}
