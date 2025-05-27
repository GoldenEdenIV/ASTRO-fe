import React from "react";

function AnalyticsView() {
  return (
    <section className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
      <ChartCard title="Reading Types Distribution" />
      <ChartCard title="Daily Reading Volume" />
    </section>
  );
}

function ChartCard({ title }) {
  return (
    <article className="p-6 rounded-xl border bg-zinc-800 border-zinc-700">
      <h3 className="mb-6 text-lg font-semibold text-white">{title}</h3>
      <div className="flex justify-center items-center bg-gray-900 rounded-lg h-[300px]">
        <span className="text-gray-400">Chart Placeholder</span>
      </div>
    </article>
  );
}

export default AnalyticsView;
