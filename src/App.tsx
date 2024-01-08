import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/layouts/Login";
import AdminPanel from "./components/layouts/AdminPanel";
import Layout from "./components/layouts/Layout";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
