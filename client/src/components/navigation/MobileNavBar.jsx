import { useNavigate, useLocation } from "react-router-dom";
import "../../assets/icons";
import NavItem from "./NavItem";

function MobileNavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: "Options", icon: "fa-bars", name: "選項" },
    {
      id: "Project",
      icon: "fa-folder-closed",
      name: "項目",
      route: "/project",
    },
    { id: "List", icon: "fa-list-check", name: "任務", route: "/" },
    { id: "Calendar", icon: "fa-calendar", name: "日曆", route: "/calendar" },
    { id: "Account", icon: "fa-user", name: "個人", route: "/account" },
  ];

  return (
    <nav className="mobile-nav">
      {navItems.map((item) => (
        <NavItem
          className="m-nav-item"
          key={item.id}
          icon={item.icon}
          name={item.name}
          isActive={location.pathname === item.route}
          onClick={() => navigate(item.route)}
        />
      ))}
    </nav>
  );
}
export default MobileNavBar;
