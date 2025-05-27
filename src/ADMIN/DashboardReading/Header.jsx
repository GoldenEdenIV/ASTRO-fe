import React from "react";

function Header({
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus,
}) {
  return (
    <header className="p-8 border border-zinc-700">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-white">
          Reading Management
        </h1>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search readings..."
              className="px-4 py-2.5 text-white rounded-lg border bg-zinc-800 border-zinc-700 w-[300px]"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              aria-label="Search readings"
            />
            <SearchIcon className="absolute top-2.5 right-4 w-5 h-5 text-gray-400" />
          </div>
          <select
            className="px-4 py-2.5 text-white rounded-lg border bg-zinc-800 border-zinc-700"
            value={filterStatus}
            onChange={(event) => setFilterStatus(event.target.value)}
            aria-label="Filter by status"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>
    </header>
  );
}

function SearchIcon({ className }) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

export default Header;
