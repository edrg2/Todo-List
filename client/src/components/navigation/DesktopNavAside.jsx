import { useNavigate, useLocation } from "react-router-dom";
import "../../assets/icons";
import NavComponents from "./NavComponents";

export default function DesktopNavAside() {
  const location = useLocation();
  const navigate = useNavigate();

  const NavSections = {
    top: [{ id: "Account", icon: "fa-user", route: "/account", label: "個人" }],
    main: [
      {
        group: "list",
        items: [
          { id: "Today", icon: "fa-sun", route: "/today", label: "今天" },
          {
            id: "Week",
            icon: "fa-mountain-sun",
            route: "/week",
            label: "本週",
          },
          {
            id: "Later",
            icon: "fa-calendar-week",
            route: "/later",
            label: "未來",
          },
        ],
      },
      {
        group: "project",
        items: [
          {
            id: "Personal",
            icon: "fa-user",
            route: "/project/personal",
            label: "個人",
          },
          {
            id: "Team",
            icon: "fa-users",
            route: "/project/team",
            label: "團隊",
          },
        ],
      },
    ],
    bottom: [
      { id: "Settings", icon: "fa-gear", route: "/settings", label: "設定" },
    ],
  };

  return (
    <aside className="desktop-nav">
      {/* Top Zone (帳戶) */}
      <nav className="d-nav-top">
        {NavSections.top.map((item) => (
          <NavComponents
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.route}
            onClick={() => navigate(item.route)}
          />
        ))}
      </nav>

      <hr />

      {/* Main Zone (任務/項目) */}
      <nav className="d-nav-main">
        {NavSections.main.map((section) => (
          <div key={section.group} className="d-nav-group">
            {section.items.map((item) => (
              <NavComponents
                key={item.id}
                icon={item.icon}
                label={item.label}
                isActive={location.pathname === item.route}
                onClick={() => navigate(item.route)}
              />
            ))}
          </div>
        ))}
      </nav>

      <hr />

      {/* Bottom Zone */}
      <nav className="d-nav-buttom">
        {NavSections.bottom.map((item) => (
          <NavComponents
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.route}
            onClick={() => navigate(item.route)}
          />
        ))}
      </nav>
    </aside>
  );
}
