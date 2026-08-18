import { useState } from "react";

export default function Input() {
  const [name, setName] = useState("");

  return (
    <div className="p-8 space-y-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
        className="rounded border border-slate-300 px-3 py-2"
      />
      <p>Hello, <strong>{name || "stranger"}</strong>!</p>
      <button
        onClick={() => setName("")}
        className="rounded bg-slate-800 px-3 py-1 text-white"
      >
        Reset
      </button>
    </div>
  );
}