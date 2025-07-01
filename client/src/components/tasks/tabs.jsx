import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tabs({ activeTab, onChange }) {
  const tabs = [
    { id: "Today", icon: "fa-sun", label: "今天" },
    { id: "Week", icon: "fa-mountain-sun", label: "本週" },
    { id: "Later", icon: "fa-calendar-week", label: "未來" },
  ];

  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-btn${
            activeTab === tab.id.toLowerCase() ? " active" : ""
          }`}
          onClick={() => onChange(tab.id.toLowerCase())}
        >
          <FontAwesomeIcon
            className="icon"
            icon={`fa-solid ${tab.icon}`}
            fixedWidth
          />
          {tab.label}
        </button>
      ))}
    </div>
  );
}
