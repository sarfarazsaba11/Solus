import { useState } from "react";
//import MenuItemList from "../components/MenuItemList";
import { ITEMS } from "../../lib/menu";
import CategorySelect from "./CategorySelect";
import SearchInput from "./SearchInput";
import MenuItemList from "./MenuItemList";

export default function MenuPage() {
  const [items, setItems]     = useState(ITEMS);
  // const [showPromo, setShowPromo] = useState(true);

  // // ★ new today
   const [query, setQuery]       = useState("");
  const [category, setCategory] = useState("");

  // … existing handlers from L25 (handleAddDemoItem, handleRemove) …
  const visibleItems = items.filter(item =>
  (!category || item.category === category) &&
  item.name.toLowerCase().includes(query.toLowerCase())
);

function handleClearFilters() {
  setQuery("");
  setCategory("");
}

  return (
    <div className="p-6">
      {/* … existing promo banner + buttons from L25 … */}
      {/* search + category controls go here in S22–S23 */}
      <SearchInput value={query} onChange={setQuery}  />
      <CategorySelect value={category} onChange={setCategory}/>
      {/* MenuItemList renders visibleItems from S24 */}

      {visibleItems.length === 0 ? (
        <div className="p-12 text-center">
          <p className="mb-3 text-slate-500">
            No items match {query && `"${query}"`} {category && `in "${category}"`}
          </p>
          <button onClick={handleClearFilters} className="rounded bg-slate-800 px-3 py-1 text-white">
            Clear filters
          </button>
        </div>
      ) : (
        <MenuItemList
          items={visibleItems}
          //emptyMessage="No items match your filters."
          // onRemove={handleRemove}
        />
      )}
     
    </div>
  );
}