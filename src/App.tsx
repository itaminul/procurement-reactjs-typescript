import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/layouts/Login";
import AdminPanel from "./components/layouts/AdminPanel";
import Layout from "./components/layouts/Layout";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import NotFound from "./components/layouts/NotFound";
function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={isAuthenticated ? <AdminPanel /> : <Login />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
