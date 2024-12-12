import React from "react";
import "./Sidebar.styles.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/reports">Reports</a></li>
        <li><a href="/metrics">Metrics</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
