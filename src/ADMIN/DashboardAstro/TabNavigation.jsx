import React from "react";

function TabNavigation({ activeSection, onSectionChange }) {
  const tabs = [
    { id: "zodiac", label: "Zodiac Signs" },
    { id: "planets", label: "Planets" },
    { id: "houses", label: "Houses" },
    { id: "aspects", label: "Aspects" },
  ];

  return (
    <nav className="flex gap-4 px-8 pb-8 border-b border-zinc-700">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className="px-5 py-2.5 font-medium rounded-lg"
          onClick={() => onSectionChange(tab.id)}
          style={{
            background: activeSection === tab.id ? "#372d45" : "transparent",
          }}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export default TabNavigation;
