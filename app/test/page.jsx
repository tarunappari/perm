"use client";
import { useState } from "react";

export default function TestPage() {
  const [caseNumber, setCaseNumber] = useState("A-23043-00641");
  const [employerInitial, setEmployerInitial] = useState("L");
  const [result, setResult] = useState(null);

  async function handleEstimate() {
    const res = await fetch("/api/estimate-by-case", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caseNumber, employerInitial }),
    });
    const data = await res.json();
    setResult(data);
    console.log(data);
    
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Estimate Case Prediction</h1>

      <input
        placeholder="Case Number"
        value={caseNumber}
        onChange={(e) => setCaseNumber(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        placeholder="Employer Initial"
        value={employerInitial}
        onChange={(e) => setEmployerInitial(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <button onClick={handleEstimate}>Estimate</button>

      {result && (
        <pre style={{ marginTop: 20, background: "#111", color: "#0f0", padding: 10 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </main>
  );
}
