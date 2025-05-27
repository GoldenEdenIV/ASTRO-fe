import React from "react";

function StatisticsCards() {
  return (
    <section className="grid grid-cols-3 gap-6 mb-8 max-sm:grid-cols-1">
      <StatCard title="Total Readings" value="1,234" />
      <StatCard title="Completion Rate" value="94.5%" />
      <StatCard title="Avg. Processing Time" value="2.5m" />
    </section>
  );
}

function StatCard({ title, value }) {
  return (
    <article className="p-6 rounded-xl border bg-zinc-800 border-zinc-700">
      <h3 className="mb-2 text-sm font-medium text-gray-400">{title}</h3>
      <p className="text-3xl font-semibold text-white">{value}</p>
    </article>
  );
}

export default StatisticsCards;
