import "../styles/AccordionPage.css";
import DropDownArrow from "../assets/DropDownArrow";

export default function AccordionPage({ children, title, open, onOpen }) {

  return (
    <>
      <li
        className={
          open ? "accordionPage" : "accordionPage accordionPage-closed"
        }
      >
        <div className="accordionPage-header" onClick={onOpen}>
          <div className="accordionPage-header-title">{title}</div>
          <DropDownArrow open={open} />
        </div>
        {open ? <div className="accordionPage-body">{children}</div> : null}
      </li>
    </>
  );
}
