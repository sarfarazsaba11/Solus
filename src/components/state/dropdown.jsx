import { useState } from "react";

export default function Select() {
  const [category, setCategory] = useState("");

  return (
    <div className="p-8">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded border border-slate-300 px-3 py-2"
      >
        <option value="">All categories</option>
        <option value="main">Mains</option>
        <option value="side">Sides</option>
        <option value="drink">Drinks</option>
      </select>
      <p className="mt-3">Filter: <strong>{category || "(all)"}</strong></p>
    </div>
  );
}