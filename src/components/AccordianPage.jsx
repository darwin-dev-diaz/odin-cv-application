import "../styles/AccordianPage.css";

import DropDownArrow from "../assets/DropDownArrow";

export default function AccordianPage({ children, title }) {
  return (
    <>
      <li className="accordianPage">
        <div className="accordianPage-header">
          <div className="accordianPage-header-title">{title}</div>
          <DropDownArrow />
        </div>
        <div className="accordianPage-body"></div>
      </li>
    </>
  );
}
