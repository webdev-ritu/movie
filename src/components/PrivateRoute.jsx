import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({element: Element, isAuthenticated, ...rest}) => {
  return isAuthenticated ? <Element {...rest}/> : <Navigate to="/login" />;
};
export default PrivateRoute;
