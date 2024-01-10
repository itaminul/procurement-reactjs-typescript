// src/components/Layout.tsx

import React, { ReactNode, useState } from "react";
import TopBar from "./TopBar";
import AdminSidebar from "./AdminSidebar";

interface props {
  children?: ReactNode;
  // any props that come into the component
}
const Layout = ({ children }: props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = () => {
    // Your login logic here, for example, setting isAuthenticated to true
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Your logout logic here, for example, setting isAuthenticated to false
    setIsAuthenticated(false);
  };

  return (
    <>
      <TopBar
        isAuthenticated={isAuthenticated}
        // handleLogin={handleLogin}
        // handleLogout={handleLogout}
      />
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Content */}
      <div style={{ marginLeft: sidebarOpen ? 240 : 0 }}>
        {/* Toggle sidebar button 
         <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          Toggle Sidebar
        </button> */}
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
