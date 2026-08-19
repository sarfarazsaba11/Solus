import { useState } from "react";

const ITEMS = [
  { id: 1, name: "BerryBurger",      category: "main" },
  { id: 2, name: "Margherita Pizza", category: "main" },
  { id: 3, name: "Creamy Pasta",     category: "main" },
  { id: 4, name: "Crispy Wings",     category: "side" },
  { id: 5, name: "Berry Smoothie",   category: "drink" },
  { id: 6, name: "Chocolate Cake",   category: "side" },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const visibleItems = ITEMS.filter(item =>
    (!category || item.category === category) &&
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-8 space-y-3">
      <div className="flex gap-2">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="rounded border border-slate-300 px-3 py-2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded border border-slate-300 px-3 py-2"
        >
          <option value="">All</option>
          <option value="main">Mains</option>
          <option value="side">Sides</option>
          <option value="drink">Drinks</option>
        </select>
      </div>
      <p className="text-sm text-slate-600">{visibleItems.length} results</p>
      <ul>
        {visibleItems.map(item => <li key={item.id}>{item.name} <em className="text-slate-500 text-sm">({item.category})</em></li>)}
      </ul>
    </div>
  );
}