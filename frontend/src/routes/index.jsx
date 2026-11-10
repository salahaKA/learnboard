import AppLayout from "@/components/layout/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Learning from "@/pages/Learning";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes element={<AppLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="learning" element={<Learning />} />
    </Routes>
  );
};

export default AppRoutes;
