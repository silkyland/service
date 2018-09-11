import React from "react";

import Backend from "./components/backend";
import User from "./components/backend/User";
import DashBoard from "./components/backend/Dashboard";

function Loading() {
  return <div>Loading...</div>;
}
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/admin", exact: true, name: "Home", component: Backend },
  { path: "/admin/dashboard", name: "Dashboard", component: DashBoard },
  { path: "/admin/users", name: "Users", component: User }
];

export default routes;
