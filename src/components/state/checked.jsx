import { useState } from "react";

export default function Checked() {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <div className="p-8 space-y-2">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isAccepted}
          onChange={(e) => setIsAccepted(e.target.checked)}
        />
        I accept the terms
      </label>
      <p>Status: <strong>{isAccepted ? "accepted ✓" : "not accepted"}</strong></p>
      <button
        disabled={!isAccepted}
        className="rounded bg-emerald-600 px-3 py-1 text-white disabled:opacity-50"
      >
        Continue
      </button>
    </div>
  );
}