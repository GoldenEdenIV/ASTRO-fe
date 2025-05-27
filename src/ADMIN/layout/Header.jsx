"use client";
import React, { useState } from "react";
import NotificationsMenu from "./NotificationsMenu";

/**
 * Header component with title and user controls
 * @param {Object} props - Component props
 * @param {string} props.activeTab - Currently active tab
 * @param {Array} props.notifications - Notifications to display
 */
function Header({ activeTab, notifications }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Capitalize the first letter of the active tab for display
  const formattedTitle = activeTab.charAt(0).toUpperCase() + activeTab.slice(1);

  return (
    <header className="flex justify-between items-center p-6 border bg-zinc-800 border-zinc-700">
      <div className="flex gap-4 items-center">
        <h2 className="text-2xl font-semibold text-white">{formattedTitle}</h2>
      </div>

      <div className="flex gap-6 items-center">
        <div className="relative">
          <button
            className="relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Notifications"
            aria-expanded={menuOpen}
            aria-controls="notifications-menu"
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          {menuOpen && (
            <NotificationsMenu
              notifications={notifications}
              onClose={() => setMenuOpen(false)}
            />
          )}
        </div>

        <img
          src="https://placehold.co/32x32"
          alt="Profile"
          className="rounded-full"
        />
      </div>
    </header>
  );
}

export default Header;
