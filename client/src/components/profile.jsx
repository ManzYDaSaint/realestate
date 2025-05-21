import React from "react";
import Para from "./paragraph";
import Avatar from "@mui/material/Avatar";
import { Divider } from "@mui/material";
import FormInput from "./formInput";
import FormArea from "./formArea";

const Profile = () => {
  return (
    <div className="py-6 px-10 rounded-lg border-2 border-gray-200">
      <h3 className="mt-4">Profile</h3>
      <Para>
        <span className="block text-left">
          Manage your public profile information.
        </span>
      </Para>
<Divider variant="full" component={"hr"} />
      {/* Content for Profile */}
      <div className="space-y-6 mt-10">
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="!h-[100px] !w-[100px] text-xl">MA</Avatar>
            <button className="rounded-md bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Change Avatar
            </button>
          </div>
          <div className="flex-1 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormInput
                label={"First Name"}
                type="text"
                placeholder={"John"}
              />
              <FormInput label={"Last Name"} type="text" placeholder={"Doe"} />
            </div>
            <div className="space-y-4">
              <FormInput
                label={"Email Address"}
                type={"email"}
                placeholder={"johndoe@example.com"}
              />
            </div>
            <div className="space-y-4">
              <FormInput
                label={"Phone Number"}
                type={"tel"}
                placeholder={"(+265) 000-000-000"}
              />
            </div>
            <div className="space-y-4">
              <FormInput
                label={"Location"}
                type={"text"}
                placeholder="Lilongwe, Malawi"
              />
            </div>
          </div>
        </div>
        <Divider variant="middle" component={"hr"} />
        <FormArea
          label={"Bio"}
          type={"text"}
          placeholder="Real estate agent with 10+ years of experience in residential properties."
          comment={"This will be displayed on your public profile."}
        />
        <FormInput
          label={"Specialties"}
          type={"text"}
          placeholder="Residential, Luxury Homes, First-time Buyers"
          comment={"Separate with commas."}
        />
        <div className="flex justify-end gap-2 pb-5">
          <button className="bg-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-300 transition duration-300 rounded-md">Cancel</button>
          <button className="bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-600 transition duration-300 rounded-md">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
