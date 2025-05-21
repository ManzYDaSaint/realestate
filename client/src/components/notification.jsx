import React from "react";
import Para from "./paragraph";
import { Divider, Switch } from "@mui/material";

const Notification = () => {
  return (
    <div className="py-6 px-10 rounded-lg border-2 border-gray-200">
      <h3 className="mt-4">Notification Settings</h3>
      <Para>
        <span className="block text-left">
          Manage how you receive notifications.
        </span>
      </Para>
<Divider variant="full" component={"hr"} />
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium mt-5">Email Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-medium text-black">New Messages</p>
                <Para>
                  <span className="text-left">
                    Receive emails when clients send you messages.
                  </span>
                </Para>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-medium text-black">New Leads</p>
                <Para>
                  <span className="text-left">
                    Receive emails for new client leads.
                  </span>
                </Para>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-medium text-black">Property Updates</p>
                <Para>
                  <span className="text-left">
                    Receive emails about property status changes.
                  </span>
                </Para>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        <Divider
          variant="middle"
          component={"hr"}
          sx={{ borderBottomWidth: "3px" }}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Push Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-medium text-black">New Messages</p>
                <Para>
                  <span className="text-left">
                    Receive push notifications for new messages.
                  </span>
                </Para>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="font-medium text-black">Appointment Reminders</p>
                <Para>
                  <span className="text-left">
                    Receive reminders for upcoming appointments.
                  </span>
                </Para>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2 pb-5 mt-4">
        <button className="bg-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-300 transition duration-300 rounded-md">
          Reset to Defaults
        </button>
        <button className="bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-600 transition duration-300 rounded-md">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Notification;
