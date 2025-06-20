function NavItem({ icon, onClick }) {
  return (
    <button onClick={onClick}>
      <i className={`fa-solid ${icon}`}></i>
    </button>
  );
}
export default NavItem;
