import React from "react";
import "./Header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">My Dashboard</div>
      <nav>
        <ul className="nav-links">
          <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
