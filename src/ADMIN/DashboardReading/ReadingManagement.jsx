"use client";
import React, { useState } from "react";
import TabNavigation from "./TabNavigation";
import StatisticsCards from "./StatisticsCards";
import ReadingTable from "./ReadingTable";
import AnalyticsView from "./AnalyticsView";
import ReadingDetailsModal from "./ReadingDetailsModal";

function ReadingManagement() {
  const [activeTab, setActiveTab] = useState("recent");
  const [selectedReading, setSelectedReading] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const [readings, setReadings] = useState([
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        email: "sarah@example.com",
        avatar: "https://placehold.co/40x40",
      },
      type: "Astrology",
      subtype: "Birth Chart",
      date: "2024-01-20 14:30",
      status: "completed",
      results: {
        ascendant: "Leo",
        sunSign: "Capricorn",
        moonSign: "Pisces",
        aspects: ["Sun square Moon", "Venus trine Jupiter"],
      },
    },
    {
      id: 2,
      user: {
        name: "Michael Kim",
        email: "michael@example.com",
        avatar: "https://placehold.co/40x40",
      },
      type: "Numerology",
      subtype: "Life Path",
      date: "2024-01-19 09:15",
      status: "pending",
      results: {
        lifePath: "7",
        expression: "4",
        destiny: "1",
      },
    },
    {
      id: 3,
      user: {
        name: "Emma Watson",
        email: "emma@example.com",
        avatar: "https://placehold.co/40x40",
      },
      type: "Astrology",
      subtype: "Solar Return",
      date: "2024-01-18 16:45",
      status: "completed",
      results: {
        year: "2024",
        keyPlanets: ["Jupiter in Taurus", "Saturn in Pisces"],
        predictions: ["Career growth", "Relationship focus"],
      },
    },
  ]);

  const handleViewDetails = (reading) => {
    setSelectedReading(reading);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <main className="flex flex-col min-h-screen text-gray-200 bg-gray-900">

      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <section className="overflow-y-auto flex-1 p-8">
        {activeTab === "recent" && (
          <div className="gap-y-6">
            <StatisticsCards />
            <ReadingTable
              readings={readings}
              onViewDetails={handleViewDetails}
            />
          </div>
        )}

        {activeTab === "analytics" && <AnalyticsView />}
      </section>

      {showDetails && (
        <ReadingDetailsModal
          reading={selectedReading}
          onClose={handleCloseDetails}
        />
      )}

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

export default ReadingManagement;
