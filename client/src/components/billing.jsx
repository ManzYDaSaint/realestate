import React from "react";
import Para from "./paragraph";
import { Divider } from "@mui/material";
import { CreditCard } from "lucide-react";

const Billing = () => {
  return (
    <div className="py-6 px-10 rounded-lg border-2 border-gray-200">
      <h3 className="mt-4">Billing Information</h3>
      <Para>
        <span className="block text-left">
          Manage your subscription and payment methods.
        </span>
      </Para>
<Divider variant="full" component={"hr"} />
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium mt-5">Current Plan</h3>
          <div className="rounded-lg border p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium">Professional Plan</p>
                <p className="text-sm text-muted-foreground">MK9,999/month</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Unlimited property listings</li>
                  <li>Advanced analytics</li>
                  <li>Client management tools</li>
                  <li>Email marketing features</li>
                </ul>
              </div>
              <button className="text-sm border rounded-md px-3 py-2 hover:bg-gray-100 transition duration-300">
                Change Plan
              </button>
            </div>
          </div>
        </div>

        <Divider
          variant="middle"
          component={"hr"}
          sx={{ borderBottomWidth: "2px" }}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Payment Methods</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <CreditCard className="h-6 w-6" />
                <div>
                  <p className="font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/24</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="hover:bg-gray-100 text-sm rounded-md px-3 py-2 transition duration-300">
                  Edit
                </button>
                <button className="hover:bg-gray-100 text-sm rounded-md px-3 py-2 transition duration-300">
                  Remove
                </button>
              </div>
            </div>
            <button className="text-sm border rounded-md px-3 py-2 w-full hover:bg-gray-100 transition duration-300">
              Add Payment Method
            </button>
          </div>
        </div>

        <Divider
          variant="middle"
          component={"hr"}
          sx={{ borderBottomWidth: "2px" }}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Billing History</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Professional Plan - Monthly</p>
                <p className="text-sm text-muted-foreground">April 1, 2023</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-medium">MK9,999</p>
                <button className="text-sm hover:bg-gray-100 rounded-md px-3 py-2 transition duration-300">
                  Receipt
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Professional Plan - Monthly</p>
                <p className="text-sm text-muted-foreground">March 1, 2023</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-medium">MK9,999</p>
                <button className="text-sm hover:bg-gray-100 rounded-md px-3 py-2 transition duration-300">
                  Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
