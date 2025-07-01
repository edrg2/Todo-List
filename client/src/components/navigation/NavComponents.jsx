import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export default function NavComponents({ icon, label, isActive, onClick }) {
  const isMobile = useSelector((state) => state.layout.isMobile);
  return (
    <button
      className={`${isMobile ? "m" : "d"}-nav-btn${isActive ? " active" : ""}`}
      onClick={onClick}
    >
      <FontAwesomeIcon className="icon" icon={`fa-solid ${icon}`} fixedWidth />
      <span>{label}</span>
    </button>
  );
}
