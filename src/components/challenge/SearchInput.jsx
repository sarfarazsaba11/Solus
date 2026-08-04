// src/components/SearchInput.jsx
export default function SearchInput({ value, onChange, placeholder = "Search menu..." }) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="rounded border border-slate-300 px-3 py-2 mr-4"
    />
  );
}