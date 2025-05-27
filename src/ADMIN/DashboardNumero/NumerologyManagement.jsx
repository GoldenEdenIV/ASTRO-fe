"use client";
import React, { useState } from "react";
import TabNavigation from "./TabNavigation";
import SystemsSection from "./SystemsSection";
import CalculationsSection from "./CalculationsSection";
import MeaningsSection from "./MeaningsSection";
import AddSystemModal from "./AddSystemModal";

function NumerologyManagement() {
  const [activeSection, setActiveSection] = useState("systems");
  const [editMode, setEditMode] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState(null);
  const [systems, setSystems] = useState([
    {
      id: 1,
      name: "Life Path Number",
      description: "Reveals the path and direction of one's life journey",
      formula: "Month + Day + Year = Single Digit",
      active: true,
    },
    {
      id: 2,
      name: "Expression Number",
      description: "Shows natural abilities and talents",
      formula: "Sum of all letters in full name",
      active: true,
    },
    {
      id: 3,
      name: "Soul Urge Number",
      description: "Inner desires and motivations",
      formula: "Sum of vowels in full name",
      active: false,
    },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSystem, setNewSystem] = useState({
    name: "",
    description: "",
    formula: "",
    active: true,
  });

  const handleAddSystem = () => {
    setSystems([
      ...systems,
      {
        ...newSystem,
        id: systems.length + 1,
      },
    ]);
    setNewSystem({
      name: "",
      description: "",
      formula: "",
      active: true,
    });
    setShowAddModal(false);
  };

  const handleToggleActive = (id, isActive) => {
    setSystems(
      systems.map((system) =>
        system.id === id ? { ...system, active: isActive } : system,
      ),
    );
  };

  const handleEditSystem = (system) => {
    setSelectedSystem(system);
    setEditMode(true);
  };

  const handleNewSystemChange = (field, value) => {
    setNewSystem({
      ...newSystem,
      [field]: value,
    });
  };

  return (
    <>
      <div className="flex flex-col text-gray-200 bg-gray-900">
        <TabNavigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className=" flex-1 p-8">
          {activeSection === "systems" && (
            <SystemsSection
              systems={systems}
              onToggleActive={handleToggleActive}
              onEditSystem={handleEditSystem}
            />
          )}
          {activeSection === "calculations" && <CalculationsSection />}
          {activeSection === "meanings" && <MeaningsSection />}
        </main>

        {showAddModal && (
          <AddSystemModal
            newSystem={newSystem}
            onNewSystemChange={handleNewSystemChange}
            onAddSystem={handleAddSystem}
            onCancel={() => setShowAddModal(false)}
          />
        )}
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<link href=&quot;https://fonts.googleapis.com/css2?family=Inter&display=swap&quot; rel=&quot;stylesheet&quot;>",
          }}
        />
      </div>
    </>
  );
}

export default NumerologyManagement;
