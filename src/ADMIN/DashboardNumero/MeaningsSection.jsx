import React from "react";

function MeaningsSection() {
  // Create an array of 9 numbers (1-9)
  const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <section className="p-6 rounded-xl border bg-zinc-800 border-zinc-700">
      <h2 className="mb-6 text-xl font-semibold text-white">Number Meanings</h2>
      <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1">
        {numbers.map((number) => (
          <article
            key={number}
            className="p-5 bg-gray-900 rounded-lg border border-zinc-700"
          >
            <h3 className="mb-3 text-base font-medium text-white">
              Number {number}
            </h3>
            <p className="text-sm text-gray-400">
              Represents various spiritual and material aspects of life. Click
              to edit full meaning and interpretations.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MeaningsSection;
