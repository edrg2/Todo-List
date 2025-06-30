import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function NavComponents({ icon, name, isActive, onClick }) {
  const isMobile = useSelector((state) => state.layout.isMobile);
  return (
    <button
      className={`${isMobile ? "m" : "d"}-nav-btn${isActive ? " active" : ""}`}
      onClick={onClick}
    >
      <FontAwesomeIcon className="icon" icon={`fa-solid ${icon}`} fixedWidth />
      <span>{name}</span>
    </button>
  );
}
export default NavComponents;
