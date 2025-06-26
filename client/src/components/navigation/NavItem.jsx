import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavItem({ icon, name, isActive, onClick }) {
  return (
    <button
      className={`m-nav-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <FontAwesomeIcon className="icon" icon={`fa-solid ${icon} fixedWidth`} />
      <p>{name}</p>
    </button>
  );
}
export default NavItem;
