function Tabs({ activeTab, onChange }) {
  const tabs = [
    { key: "today", label: "今天" },
    { key: "week", label: "本週" },
    { key: "later", label: "未來" },
  ];

  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={activeTab === tab.key ? "active" : ""}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
export default Tabs;
