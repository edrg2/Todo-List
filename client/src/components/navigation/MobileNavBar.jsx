import { useNavigate, useLocation } from "react-router-dom";
import "../../assets/icons";
import NavComponents from "./NavComponents";

function MobileNavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: "Options", icon: "fa-bars", name: "選項" },
    {
      id: "Project",
      icon: "fa-folder-closed",
      route: "/project",
      name: "項目",
    },
    { id: "Home", icon: "fa-list-check", route: "/today", name: "任務" },
    { id: "Calendar", icon: "fa-calendar", route: "/calendar", name: "日曆" },
    { id: "Account", icon: "fa-user", route: "/account", name: "個人" },
  ];

  return (
    <nav className="mobile-nav">
      {navItems.map((item) => (
        <NavComponents
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
