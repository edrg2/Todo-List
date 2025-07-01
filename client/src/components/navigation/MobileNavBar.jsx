import { useNavigate, useLocation } from "react-router-dom";
import "../../assets/icons";
import NavComponents from "./NavComponents";
import { activeNav } from "../../features/navigation/navUtils";

export default function MobileNavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: "Options", icon: "fa-bars", label: "選項" },
    {
      id: "Project",
      icon: "fa-folder-closed",
      route: "/project",
      label: "項目",
    },
    { id: "Tasks", icon: "fa-list-check", route: "/today", label: "任務" },
    { id: "Calendar", icon: "fa-calendar", route: "/calendar", label: "日曆" },
    { id: "Account", icon: "fa-user", route: "/account", label: "個人" },
  ];

  return (
    <nav className="mobile-nav">
      {navItems.map((item) => (
        <NavComponents
          key={item.id}
          icon={item.icon}
          label={item.label}
          isActive={activeNav(location.pathname, item.route)}
          onClick={() => navigate(item.route)}
        />
      ))}
    </nav>
  );
}
