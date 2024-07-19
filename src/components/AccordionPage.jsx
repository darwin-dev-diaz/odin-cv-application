import "../styles/AccordionPage.css";

import DropDownArrow from "../assets/DropDownArrow";

export default function AccordionPage({ children, title }) {
  return (
    <>
      <li className="accordionPage">
        <div className="accordionPage-header">
          <div className="accordionPage-header-title">{title}</div>
          <DropDownArrow />
        </div>
        <div className="accordionPage-body">
          {children}
        </div>
      </li>
    </>
  );
}
