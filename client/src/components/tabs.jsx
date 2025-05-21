import React from "react";
import { User, Bell, CreditCard, Palette, LockIcon } from "lucide-react";

const Turbo = ({ selectedTab, setSelectedTab, children }) => {
  const tabs = [
    { name: "Profile", icon: <User size={16} /> },
    { name: "Account", icon: <LockIcon size={16} /> },
    { name: "Notifications", icon: <Bell size={16} /> },
    { name: "Billing", icon: <CreditCard size={16} /> },
    { name: "Appearance", icon: <Palette size={16} /> },
  ];

  return (
    <>
      <div className="flex space-x-4 bg-gray-200 p-1 rounded-lg border-b border-gray-100 mt-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setSelectedTab(tab.name)}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-200 ${
              selectedTab === tab.name
                ? "border-black text-black bg-white rounded-md"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-4">{children}</div>
    </>
  );
};

export default Turbo;
