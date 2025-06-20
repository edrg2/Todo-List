import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";

function MobileNavBar() {
  // const location = useLocation();
  const navigate = useNavigate();

  // options選項 彈出視窗 未做

  const navItems = [
    { name: "Home", icon: "fa-house", route: "/" },
    { name: "Project", icon: "fa-folder-closed", route: "/project" },
    { name: "Calendar", icon: "fa-calendar", route: "/calendar" },
    { name: "Account", icon: "fa-user", route: "/account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around py-2 z-50">
      {navItems.map((item) => (
        <NavItem
          key={item.name}
          icon={item.icon}
          // route={item.route}
          // isActive={location.pathname === item.route}
          onClick={() => navigate(item.route)}
        />
      ))}
    </nav>
  );
}
export default MobileNavBar;
