import React from "react";

function ReadingTableRow({ reading, onViewDetails }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "#059669";
      case "pending":
        return "#d97706";
      default:
        return "#dc2626";
    }
  };

  return (
    <tr className="border-b border-zinc-700">
      <td className="p-4">
        <div className="flex gap-3 items-center">
          <img
            alt={`${reading.user.name}'s avatar`}
            className="w-10 h-10 rounded-full"
            src={reading.user.avatar}
          />
          <div>
            <p className="text-sm font-medium text-white">
              {reading.user.name}
            </p>
            <span className="text-xs text-gray-400">{reading.user.email}</span>
          </div>
        </div>
      </td>
      <td className="p-4">
        <div>
          <p className="text-sm text-white">{reading.type}</p>
          <span className="text-xs text-gray-400">{reading.subtype}</span>
        </div>
      </td>
      <td className="p-4">
        <time className="text-sm text-gray-400" dateTime={reading.date}>
          {reading.date}
        </time>
      </td>
      <td className="p-4">
        <span
          className="px-2 py-1 text-xs font-medium text-white rounded-full"
          style={{
            background: getStatusColor(reading.status),
          }}
        >
          {reading.status}
        </span>
      </td>
      <td className="p-4">
        <button
          className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-700 rounded-md"
          onClick={onViewDetails}
        >
          View Details
        </button>
      </td>
    </tr>
  );
}

export default ReadingTableRow;
