import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PortfolioList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/portfolios")
      .then((res) => {
        console.log("API Response:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setData([]);
      });
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Portfolio List</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2 border-b">ID</th>
            <th className="py-2 border-b">Name</th>
            <th className="py-2 border-b">Risk</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((portfolio) => (
              <tr key={portfolio.id}>
                <td className="py-2 border-b">{portfolio.id}</td>
                <td className="py-2 border-b">{portfolio.name}</td>
                <td className="py-2 border-b">{portfolio.risk_level}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
