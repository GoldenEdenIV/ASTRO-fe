"use client";
import React, { useState } from "react";
import TabNavigation from "./TabNavigation";
import ZodiacSection from "./ZodiacSection";
import PlanetSection from "./PlanetSection";
import HouseSection from "./HouseSection";
import AspectSection from "./AspectSection";
import AddModal from "./AddModal";

function AstrologyManagement() {
  const [activeSection, setActiveSection] = useState("zodiac");
  const [editMode, setEditMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [zodiacSigns, setZodiacSigns] = useState([
    {
      id: 1,
      name: "Aries",
      element: "Fire",
      planet: "Mars",
      symbol: "♈",
      dateRange: "March 21 - April 19",
      description: "Cardinal fire sign ruled by Mars",
      traits: ["Courageous", "Energetic", "Dynamic"],
    },
    {
      id: 2,
      name: "Taurus",
      element: "Earth",
      planet: "Venus",
      symbol: "♉",
      dateRange: "April 20 - May 20",
      description: "Fixed earth sign ruled by Venus",
      traits: ["Patient", "Reliable", "Devoted"],
    },
  ]);

  const [planets, setPlanets] = useState([
    {
      id: 1,
      name: "Sun",
      symbol: "☉",
      meaning: "Core identity and ego",
      domicile: "Leo",
    },
    {
      id: 2,
      name: "Moon",
      symbol: "☽",
      meaning: "Emotions and inner self",
      domicile: "Cancer",
    },
  ]);

  const [aspects, setAspects] = useState([
    {
      id: 1,
      name: "Conjunction",
      angle: "0°",
      symbol: "☌",
      nature: "Unifying",
    },
    {
      id: 2,
      name: "Opposition",
      angle: "180°",
      symbol: "☍",
      nature: "Tensional",
    },
  ]);

  const handleEditItem = (item) => {
    setEditMode(true);
    setSelectedItem(item);
  };

  const handleAddNewEntry = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
  };

  const handleAddEntry = () => {
    // Logic to add a new entry would go here
    setShowAddModal(false);
  };

  return (
    <main className="flex flex-col min-h-screen text-gray-200 bg-gray-900">

      <TabNavigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <section className="overflow-y-auto flex-1 p-8">
        {activeSection === "zodiac" && (
          <ZodiacSection
            zodiacSigns={zodiacSigns}
            onEditItem={handleEditItem}
          />
        )}

        {activeSection === "planets" && (
          <PlanetSection planets={planets} onEditItem={handleEditItem} />
        )}

        {activeSection === "houses" && <HouseSection />}

        {activeSection === "aspects" && (
          <AspectSection aspects={aspects} onEditItem={handleEditItem} />
        )}
      </section>

      <AddModal
        isVisible={showAddModal}
        activeSection={activeSection}
        onCancel={handleCloseModal}
        onAdd={handleAddEntry}
      />

      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">',
          }}
        />
      </div>
    </main>
  );
}

export default AstrologyManagement;
