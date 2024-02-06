// src/components/PrivateRoute.tsx

import React from "react";
import { Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactNode;
  isAuthenticated: boolean;
  redirectTo: string;
  path: string;
}

const PrivateRoute= ({
  element,
  isAuthenticated,
  redirectTo,
  ...rest
}: PrivateRouteProps) => {
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default PrivateRoute;
