export default function CategorySelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded border border-slate-300 px-3 py-2"
    >
      <option value="">All categories</option>
      <option value="main">Mains</option>
      <option value="side">Sides</option>
      <option value="drink">Drinks</option>
    </select>
  );
}