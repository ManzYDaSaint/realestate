import React from "react";

const FormInput = ({ label, type, value, name, onChange, placeholder, comment }) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="space-y-1">
        {label && (
          <label htmlFor={name} className="text-sm">
            {label}
          </label>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full text-sm rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
        <span className="text-xs text-gray-500">{comment}</span>
      </div>
    </div>
  );
};

export default FormInput;
