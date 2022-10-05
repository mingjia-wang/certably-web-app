import React from "react";

import Sidebar from '../../src/components/Sidebar/Sidebar';
import Dashboard from "../components/Dashboard/Dashboard";

import './Home.css';

function Home() {
  return (
    <main className="page-container">
      <Sidebar />
      <Dashboard />
    </main>
  )
}

export default Home;