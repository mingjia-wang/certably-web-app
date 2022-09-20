import * as React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandlordDashboard from "./pages/LandlordDashboard";
import TenantDashboard from "./pages/TenantDashboard";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/landlords" element={<LandlordDashboard />} />
            <Route path="/tenants" element={<TenantDashboard />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

