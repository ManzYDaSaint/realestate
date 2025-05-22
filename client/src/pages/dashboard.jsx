import React, { useState } from "react";
import {
  Home,
  Menu,
  ChevronLeft,
  Building2,
  Users,
  MessageSquareText,
  ChartAreaIcon,
  SettingsIcon,
  LucideLogOut,
  FireExtinguisherIcon,
  TrendingUp,
  Bell,
  MailIcon,
  UserCircle,
  File,
  Users2,
  DollarSign,
  BriefcaseBusinessIcon,
} from "lucide-react";
import { Settings } from "./settings";
import Para from "../components/paragraph";
import FormInput from "../components/formInput";
import PropertyList from "./listing";
import { Messages } from "./messages";
import Analytics from "./analytics";
import Notify from "./notify";
import { Divider } from "@mui/material";
import InvoicingBilling from "./invoices";
import LeadManagement from "./lead";
import DealManagement from "./deal";
import ProjectManagement from "./project";
import HomeDashboard from "./home";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);

  const menuItems = [
    { icon: Home, label: "Home", content: <HomeDashboard /> },
    { icon: Building2, label: "Property", content: <PropertyList /> },
    { icon: Users2, label: "Lead Management", content: <LeadManagement /> },
    { icon: DollarSign, label: "Deal Management", content: <DealManagement /> },
    { icon: BriefcaseBusinessIcon, label: "Project Management", content: <ProjectManagement /> },
    { icon: File, label: "Invoices", content: <InvoicingBilling /> },
    { icon: ChartAreaIcon, label: "Analytics", content: <Analytics /> },
    { icon: SettingsIcon, label: "Settings", content: <Settings /> },
    { icon: Users, label: "Notifications", content: <Notify setUnreadCount={setUnreadCount}/> },
    { icon: MessageSquareText, label: "Messages", content: <Messages /> },
  ];

  return (
    <div className="flex">
      <div
        className={`fixed top-0 left-0 h-screen bg-white border-r shadow-md transition-all duration-300 flex flex-col z-50 ${
          isCollapsed ? "w-16" : "w-60"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center justify-between p-4">
            {!isCollapsed && <span className="text-xl font-bold">Logo</span>}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded hover:bg-gray-100"
            >
              {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
            </button>
          </div>
          <Divider />

          <nav className="flex-1 flex flex-col gap-2 p-2 overflow-y-auto">
            {menuItems
              .filter(
                (item) =>
                  item.label !== "Notifications" && item.label !== "Messages"
              )
              .map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-4 p-3 rounded-md hover:bg-gray-100 hover:text-black transition-colors ${
                    activeIndex === index ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  <item.icon size={22} />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </button>
              ))}
          </nav>
            
            <Divider />
          <div className="flex flex-col items-center justify-center py-4 gap-3">
            <div className="bg-blue-500 rounded-md p-2">
              <div className="flex flex-row justify-between align-center">
                <FireExtinguisherIcon
                  size={24}
                  className="text-white bg-blue-500 p-0"
                />
                {!isCollapsed && (
                  <TrendingUp size={22} className="text-white" />
                )}
              </div>
              {!isCollapsed && <Para>Upgrade & unlock all features</Para>}
              {!isCollapsed && (
                <button className="block text-center w-full bg-white text-black rounded-md px-4 py-2 mt-2 hover:bg-gray-100 transition-colors">
                  Upgrade
                </button>
              )}
            </div>

            <button className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-100 hover:text-black transition-colors">
              <LucideLogOut size={22} color="red" />
              {!isCollapsed && (
                <span className="text-base font-medium">Log Out</span>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="fixed top-0 w-screen z-10 bg-white border-b shadow-md transition-all duration-300 z-1 pt-3">
        <div className="flex flex:row items-center align-center justify-between px-4">
          <div className="ml-24 w-1/3">
            <FormInput placeholder={"Search..."} />
          </div>
          <div className="p-0 flex items-center justify-center gap-8 w-1/3">
            <div className="relative" onClick={() => setActiveIndex(8)}>
              <Bell size={25} className="text-gray-500 cursor-pointer" />
              {unreadCount > 0 && (
              <span className="absolute top-0 left-4 bg-red-500 text-white rounded-full px-1 py-0 text-xs">
                {unreadCount}
              </span>
              )}
            </div>
            <div className="relative" onClick={() => setActiveIndex(9)}>
              <MailIcon size={25} className="text-gray-500 cursor-pointer" />
              <span className="absolute top-0 left-4 bg-red-500 text-white rounded-full px-1 py-0 text-xs">
                3
              </span>
            </div>
            <div className="bg-gray-100 rounded-full w-full h-7 px-5 py-5 flex items-center justify-center">
              <UserCircle size={24} className="text-black" />
              <p className="ml-2 text-sm text-semibold">Emmanuel Nyangazi</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex-1 transition-all duration-300 ml-16 ${
          !isCollapsed ? "md:ml-60" : "ml-16"
        } p-8`}
      >
        <div className="mt-16">{menuItems[activeIndex].content}</div>
      </div>
    </div>
  );
}
