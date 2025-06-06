import React from "react";
import PortfolioForm from "./components/PortfolioForm.jsx";
import PortfolioList from "./components/PortfolioList.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        DevOps Portfolio Manager
      </h1>
      <PortfolioForm />
      <PortfolioList />
    </div>
  );
}
