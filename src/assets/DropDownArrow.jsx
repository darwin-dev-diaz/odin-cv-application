export default function DropDownArrow({open}) {
  return (
    <>
      <svg
        className={open ? "dropDownSVG" : "dropDownSVG dropDownSVG-closed"}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="M480-360 280-560h400L480-360Z" />
      </svg>
    </>
  );
}
