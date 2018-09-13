import React from "react";

import Backend from "./components/backend";
import User from "./components/backend/User";
import DashBoard from "./components/backend/Dashboard";
import OperatingSystem from "./components/backend/OperatingSystem";

function Loading() {
  return <div>Loading...</div>;
}
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/admin", exact: true, name: "Home", component: Backend },
  { path: "/admin/dashboard", name: "Dashboard", component: DashBoard },
  { path: "/admin/users", name: "จัดการผู้ใช้งาน", component: User },
  {
    path: "/admin/other/operatingSystem",
    name: "จัดการระบบปฏิบัติการ",
    component: OperatingSystem
  }
];

export default routes;
