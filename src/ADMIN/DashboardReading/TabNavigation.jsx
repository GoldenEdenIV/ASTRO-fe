import React from "react";

function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <nav className="flex gap-4 px-8 pb-8 border-b border-zinc-700">
      <TabButton
        label="Recent Readings"
        isActive={activeTab === "recent"}
        onClick={() => setActiveTab("recent")}
      />
      <TabButton
        label="Analytics"
        isActive={activeTab === "analytics"}
        onClick={() => setActiveTab("analytics")}
      />
    </nav>
  );
}

function TabButton({ label, isActive, onClick }) {
  return (
    <button
      className="px-5 py-2.5 font-medium rounded-lg"
      onClick={onClick}
      style={{
        background: isActive ? "#372d45" : "transparent",
      }}
      aria-selected={isActive}
      role="tab"
    >
      {label}
    </button>
  );
}

export default TabNavigation;
