import React from "react";
import ReadingTableRow from "./ReadingTableRow";

function ReadingTable({ readings, onViewDetails }) {
  return (
    <section className="rounded-xl border bg-zinc-800 border-zinc-700">
      <header className="p-6 border-b border-zinc-700">
        <h3 className="text-lg font-semibold text-white">Reading History</h3>
      </header>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-zinc-700">
              <th className="p-4 text-sm font-medium text-gray-400">User</th>
              <th className="p-4 text-sm font-medium text-gray-400">Type</th>
              <th className="p-4 text-sm font-medium text-gray-400">Date</th>
              <th className="p-4 text-sm font-medium text-gray-400">Status</th>
              <th className="p-4 text-sm font-medium text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {readings.map((reading) => (
              <ReadingTableRow
                key={reading.id}
                reading={reading}
                onViewDetails={() => onViewDetails(reading)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ReadingTable;
