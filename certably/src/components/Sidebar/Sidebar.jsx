import React from "react";

import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <p className="logo">logo</p>
      <div className="sidebar-icons">
        <p className="icon">1</p>
        <p className="icon">2</p>
        <p className="icon">3</p>
        <p className="icon">4</p>
        <p className="icon">5</p>
      </div>
    </div>
  );
}

export default Sidebar;