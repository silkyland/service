import React from "react";

import Backend from "./components/backend";
import User from "./components/backend/User";
import DashBoard from "./components/backend/Dashboard";
import OperatingSystem from "./components/backend/OperatingSystem";
import Campus from "./components/backend/Campus";
import Status from "./components/backend/Status";
import Brand from "./components/backend/Brand";
import Office from "./components/backend/Office";
import Department from "./components/backend/Department";
import Application from "./components/backend/Application";
import DeviceType from "./components/backend/DeviceType";
import Device from "./components/backend/Device";
import Client from "./components/backend/Client";
import ClientType from "./components/backend/ClientType";
import Issue from "./components/backend/Issue";
import Inventory from "./components/backend/Inventory";

function Loading() {
  return <div>Loading...</div>;
}
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/admin", exact: true, name: "Home", component: Backend },
  { path: "/admin/dashboard", name: "Dashboard", component: DashBoard },
  { path: "/admin/users", name: "จัดการผู้ใช้งาน", component: User },

  {
    path: "/admin/other/campus",
    name: "พื้นที่จัดการศึกษา",
    component: Campus
  },
  {
    path: "/admin/other/department",
    name: "หน่วยงานและคณะ",
    component: Department
  },
  {
    path: "/admin/other/operatingSystem",
    name: "จัดการระบบปฏิบัติการ",
    component: OperatingSystem
  },
  {
    path: "/admin/other/office",
    name: "โปรแกรมสำนักงาน",
    component: Office
  },
  {
    path: "/admin/other/application",
    name: "โปรแกรม",
    component: Application
  },
  {
    path: "/admin/other/brand",
    name: "ยี่ห้อ",
    component: Brand
  },
  {
    path: "/admin/other/device",
    name: "อุปกรณ์",
    component: Device
  },
  {
    path: "/admin/other/deviceType",
    name: "ชนิดอุปกรณ์",
    component: DeviceType
  },
  {
    path: "/admin/other/client",
    name: "ผู้มาขอบริการ",
    component: Client
  },
  {
    path: "/admin/other/clientType",
    name: "ประเภทผู้ใช้",
    component: ClientType
  },
  {
    path: "/admin/other/inventory",
    name: "สิ่งที่นำมาด้วย",
    component: Inventory
  },
  {
    path: "/admin/other/issue",
    name: "ปัญหา",
    component: Issue
  },
  {
    path: "/admin/other/status",
    name: "สถานะ",
    component: Status
  }
];

export default routes;
