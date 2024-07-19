import "../styles/InputField.css";

export default function PersonalInfoField(){
    return(
        <form>
            <div className="input-group">
              <label for="full-name">
                <span class="label-text">Full Name</span>
              </label>
              <input
                type="text"
                id="full-name"
                placeholder="First and last name"
                data-key="fullName"
                // value="Darwin Diaz"
              ></input>
            </div>
            <div className="input-group">
              <label for="email">
                <span class="label-text">Email</span>
                <span class="recommended-text">recommended</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                data-key="email"
                // value="josephine.meyers@mail.co.uk"
              ></input>
            </div>
            <div class="input-group">
              <label for="phone-number">
                <span class="label-text">Phone number</span>
                <span class="recommended-text">recommended</span>
              </label>
              <input
                type="tel"
                id="phone-number"
                placeholder="Enter phone number"
                data-key="phoneNumber"
                // value="+44 3245 5521 5521"
              ></input>
            </div>
            <div class="input-group">
              <label for="address">
                <span class="label-text">Address</span>
                <span class="recommended-text">recommended</span>
              </label>
              <input
                type="text"
                id="address"
                placeholder="City, Country"
                data-key="address"
                //   value="London, UK"
              ></input>
            </div>
          </form>
    )
}