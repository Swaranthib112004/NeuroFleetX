import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block px-4 py-2 rounded transition ${
        isActive ? "bg-blue-100 text-blue-700 font-semibold" : "hover:bg-slate-200"
      }`
    }
  >
    {label}
  </NavLink>
);

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-56 bg-white border-r shadow-sm">
      <div className="p-4 text-lg font-bold text-blue-600">Menu</div>
      <nav className="px-2 space-y-1">
        <NavItem to="/dashboard" label="Dashboard" />
        <NavItem to="/fleet" label="Fleet Map" />
        <NavItem to="/analytics" label="Analytics" />
      </nav>
    </aside>
  );
}
