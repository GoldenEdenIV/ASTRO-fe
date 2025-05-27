import React from "react";

function ReadingDetailsModal({ reading, onClose }) {
  if (!reading) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <section className="overflow-y-auto p-8 rounded-xl bg-zinc-800 max-h-[90vh] max-w-[90%] w-[800px]">
        <header className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-semibold text-white">Reading Details</h3>
          <button
            className="text-gray-400"
            onClick={onClose}
            aria-label="Close details"
          >
            <CloseIcon />
          </button>
        </header>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <UserInfoCard user={reading.user} />
            <ReadingInfoCard reading={reading} />
          </div>

          <ReadingResultsCard reading={reading} />
        </div>
      </section>
    </div>
  );
}

function UserInfoCard({ user }) {
  return (
    <div className="p-4 bg-gray-900 rounded-lg">
      <h4 className="mb-2 text-sm font-medium text-gray-400">
        User Information
      </h4>
      <div className="flex gap-3 items-center">
        <img
          alt={`${user.name}'s avatar`}
          className="w-12 h-12 rounded-full"
          src={user.avatar}
        />
        <div>
          <p className="text-base font-medium text-white">{user.name}</p>
          <span className="text-sm text-gray-400">{user.email}</span>
        </div>
      </div>
    </div>
  );
}

function ReadingInfoCard({ reading }) {
  return (
    <div className="p-4 bg-gray-900 rounded-lg">
      <h4 className="mb-2 text-sm font-medium text-gray-400">
        Reading Information
      </h4>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Type:</span>
          <span className="text-sm text-white">{reading.type}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Subtype:</span>
          <span className="text-sm text-white">{reading.subtype}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Date:</span>
          <time className="text-sm text-white" dateTime={reading.date}>
            {reading.date}
          </time>
        </div>
      </div>
    </div>
  );
}

function ReadingResultsCard({ reading }) {
  return (
    <div className="p-6 bg-gray-900 rounded-lg">
      <h4 className="mb-4 text-base font-medium text-white">Reading Results</h4>

      {reading.type === "Astrology" && (
        <div className="grid grid-cols-2 gap-4">
          {reading.results.ascendant && (
            <ResultItem label="Ascendant" value={reading.results.ascendant} />
          )}
          {reading.results.sunSign && (
            <ResultItem label="Sun Sign" value={reading.results.sunSign} />
          )}
          {reading.results.moonSign && (
            <ResultItem label="Moon Sign" value={reading.results.moonSign} />
          )}
          {reading.results.keyPlanets &&
            reading.results.keyPlanets.map((planet, index) => (
              <ResultItem
                key={index}
                label={`Key Planet ${index + 1}`}
                value={planet}
              />
            ))}
        </div>
      )}

      {reading.type === "Numerology" && (
        <div className="grid grid-cols-3 gap-4">
          {reading.results.lifePath && (
            <ResultItem label="Life Path" value={reading.results.lifePath} />
          )}
          {reading.results.expression && (
            <ResultItem label="Expression" value={reading.results.expression} />
          )}
          {reading.results.destiny && (
            <ResultItem label="Destiny" value={reading.results.destiny} />
          )}
        </div>
      )}
    </div>
  );
}

function ResultItem({ label, value }) {
  return (
    <div className="p-4 rounded-lg bg-zinc-800">
      <span className="text-sm text-gray-400">{label}</span>
      <p className="text-base font-medium text-white">{value}</p>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default ReadingDetailsModal;
