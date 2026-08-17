import { useState } from "react";

const ITEMS = [
  { id: 1, name: "BerryBurger" },
  { id: 2, name: "Margherita Pizza" },
  { id: 3, name: "Creamy Pasta" },
  { id: 4, name: "Crispy Wings" },
  { id: 5, name: "Berry Smoothie" },
  { id: 6, name: "Chocolate Cake" },
];

export default function App() {
  const [query, setQuery] = useState("");

  const visibleItems = ITEMS.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-8">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search menu..."
        className="mb-4 rounded border border-slate-300 px-3 py-2"
      />
      <p className="mb-2 text-sm text-slate-600">{visibleItems.length} results</p>
      <ul>
        {visibleItems.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}