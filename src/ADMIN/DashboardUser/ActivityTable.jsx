import React from "react";

/**
 * Recent activity table component
 */
function ActivityTable() {
  const activities = [
    {
      user: {
        name: "Sarah Chen",
        email: "sarah@example.com",
        avatar: "https://placehold.co/32x32",
      },
      type: "Numerology Reading",
      date: "2024-01-20",
      status: {
        label: "Completed",
        color: "bg-emerald-600",
      },
    },
    {
      user: {
        name: "Michael Kim",
        email: "michael@example.com",
        avatar: "https://placehold.co/32x32",
      },
      type: "Astrology Chart",
      date: "2024-01-19",
      status: {
        label: "Failed",
        color: "bg-red-600",
      },
    },
  ];

  return (
    <section className="rounded-xl border bg-zinc-800 border-zinc-700">
      <div className="p-6 border-b border-zinc-700">
        <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-zinc-700">
              <th className="p-4 text-sm font-medium text-gray-400">User</th>
              <th className="p-4 text-sm font-medium text-gray-400">Type</th>
              <th className="p-4 text-sm font-medium text-gray-400">Date</th>
              <th className="p-4 text-sm font-medium text-gray-400">Status</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((activity, index) => (
              <tr key={index} className="border-b border-zinc-700">
                <td className="p-4">
                  <div className="flex gap-3 items-center">
                    <img
                      src={activity.user.avatar}
                      alt={`${activity.user.name} avatar`}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {activity.user.name}
                      </p>
                      <span className="text-xs text-gray-400">
                        {activity.user.email}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-sm text-white">{activity.type}</span>
                </td>
                <td className="p-4">
                  <span className="text-sm text-gray-400">{activity.date}</span>
                </td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium text-white ${activity.status.color} rounded-full`}
                  >
                    {activity.status.label}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ActivityTable;
