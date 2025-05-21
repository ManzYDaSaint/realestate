import React, { useState } from "react";

import AnalyticsTabs from "../components/analytics-tabs";
import MonthlyRevenue from "../components/monthly-revenue";
import AnalyticSales from "../components/sales";
import AnalyticListing from "../components/listing";
import AnalyticClients from "../components/clients";

export default function Analytics() {
  const [selectedTab, setSelectedTab] = useState("Overview");


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Analytics</h1>
      </div>
      <AnalyticsTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          {selectedTab === "Overview" && <MonthlyRevenue />}
          {selectedTab === "Sales" && <AnalyticSales />}
          {selectedTab === "Listings" && <AnalyticListing />}
          {selectedTab === "Clients" && <AnalyticClients />}
    </div>
  );
}
