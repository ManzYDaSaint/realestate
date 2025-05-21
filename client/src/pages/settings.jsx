import { useState } from "react";
import Turbo from "../components/tabs";
import Profile from "../components/profile";
import Account from "../components/account";
import Notification from "../components/notification";
import Billing from "../components/billing";
import Appearance from "../components/appearance";

export function Settings() {
  const [selectedTab, setSelectedTab] = useState("Profile");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>
      <Turbo selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          {selectedTab === "Profile" && <Profile />}
          {selectedTab === "Account" && <Account />}
          {selectedTab === "Notifications" && <Notification />}
          {selectedTab === "Billing" && <Billing />}
          {selectedTab === "Appearance" && <Appearance />}
    </div>
  );
}
