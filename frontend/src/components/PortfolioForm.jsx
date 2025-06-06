import React, { useState } from "react";
import axios from "axios";

export default function PortfolioForm() {
  const [name, setName] = useState("");
  const [risk, setRisk] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/portfolios", { name, risk });
    setName("");
    setRisk("");
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 bg-white p-6 rounded shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700">Portfolio Name:</label>
        <input
          type="text"
          className="w-full border rounded p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Risk Level:</label>
        <select
          className="w-full border rounded p-2"
          value={risk}
          onChange={(e) => setRisk(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="High">High</option>
          <option value="Moderate">Moderate</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
