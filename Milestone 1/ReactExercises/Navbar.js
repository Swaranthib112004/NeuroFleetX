import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow">
      <h1 className="text-xl font-semibold text-blue-700">NeuroFleetX</h1>
      <button
        onClick={logout}
        className="flex items-center gap-2 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
      >
        <FaSignOutAlt /> Logout
      </button>
    </header>
  );
}
