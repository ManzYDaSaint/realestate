import React from "react";
import { LayoutList, Banknote, MapPinHouse, Users2 } from "lucide-react";

const AnalyticsTabs = ({ selectedTab, setSelectedTab, children }) => {
  const tabs = [
    { name: "Overview", icon: <LayoutList size={16} /> },
    { name: "Sales", icon: <Banknote size={16} /> },
    { name: "Listings", icon: <MapPinHouse size={16} /> },
    { name: "Clients", icon: <Users2 size={16} /> },
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

export default AnalyticsTabs;
