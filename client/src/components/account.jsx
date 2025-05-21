import React from "react";
import Para from "./paragraph";
import FormInput from "./formInput";
import { Divider, Switch } from "@mui/material";
import { Mail } from "lucide-react";

const Account = () => {
  return (
    <div className="py-6 px-10 rounded-lg border-2 border-gray-200">
      <h3 className="mt-4">Account Settings</h3>
      <Para>
        <span className="block text-left">
          Manage your account settings and security preferences.
        </span>
      </Para>
      <Divider variant="full" component={"hr"} />
      <div className="space-y-6 mt-10">
        <div className="space-y-4">
          <FormInput
            label={"Current Password"}
            type="password"
            placeholder="********"
          />
          <FormInput
            label={"New Password"}
            type="password"
            placeholder="********"
          />
          <FormInput
            label={"Confirm Password"}
            type="password"
            placeholder="********"
          />
        </div>
        <Divider variant="middle" component={"hr"} />
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
          <div className="flex items-center justify-between">
            <div className="space-y-0">
              <p>Protect your account with 2FA</p>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account by enabling 2FA.
              </p>
            </div>
            <Switch />
          </div>
        </div>

        <Divider
          variant="middle"
          component={"hr"}
          sx={{ borderBottomWidth: "3px" }}
        />
        <div className="space-y-4 ">
          <h3 className="text-lg font-medium">Connected Accounts</h3>
          <div className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 mr-2" />
                <div>
                  <p>Email</p>
                  <p className="text-sm text-muted-foreground">
                    john.doe@example.com
                  </p>
                </div>
              </div>
              <button className="text-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md px-3 py-2">
                Manage
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 pb-5 mt-4">
          <button className="bg-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-300 transition duration-300 rounded-md">
            Cancel
          </button>
          <button className="bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-600 transition duration-300 rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
