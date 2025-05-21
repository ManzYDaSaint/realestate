import React, { useState } from "react";
import Para from "./paragraph";
import { Moon, Sun } from "lucide-react";
import { Divider, Switch } from "@mui/material";

const Appearance = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="py-6 px-10 rounded-lg border-2 border-gray-200">
      <h3 className="mt-4 text-xl font-semibold">Appearance</h3>
      <Para>
        <span className="block text-left text-gray-600">
          Customize how the application looks and feels.
        </span>
      </Para>
      <Divider variant="full" component="hr" className="my-4" />
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium mt-5">Theme</h3>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                {isDarkMode ? (
                  <Moon className="h-6 w-6 text-gray-900" />
                ) : (
                  <Sun className="h-6 w-6 text-yellow-500" />
                )}
                <p className="text-gray-800 font-medium">
                  {isDarkMode ? "Dark Mode" : "Light Mode"}
                </p>
              </div>
                <p className="text-sm text-muted-foreground">
                      {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    </p>
            </div>
            <Switch
              checked={isDarkMode}
              onChange={(e) => setIsDarkMode(e.target.checked)}
              inputProps={{ "aria-label": "Toggle dark mode" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
