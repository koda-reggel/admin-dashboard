"use client";

import React from "react";
import Select from "react-select";

export default function Page() {
  interface CountryOption {
    readonly id: number;
    readonly name: string;
  }
  const countryOptions: readonly CountryOption[] = [
    { id: 1, name: "America" },
    { id: 2, name: "Philippines" },
    { id: 3, name: "France" },
    { id: 4, name: "China" },
  ];

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#d9dade", // Light gray background for the control
      borderColor: "#ccc", // Optional: Border color
      boxShadow: "none", // Optional: Remove box shadow
      "&:hover": {
        borderColor: "#888", // Optional: Change border color on hover
      },
    }),
    menu: (styles: any) => ({
      ...styles,
      backgroundColor: "#ffffff", // White background for the dropdown menu
    }),
    option: (styles: any, { isFocused }: any) => ({
      ...styles,
      backgroundColor: isFocused ? "#f0f0f0" : "#ffffff", // Change background on focus
      color: "#010206", // Text color
      "&:hover": {
        backgroundColor: "#e0e0e0", // Background color on hover
      },
    }),
  };

  return (
    <div className="w-full">
      <Select
        placeholder="Enter your email"
        blurInputOnSelect={false}
        closeMenuOnSelect={false}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id.toString()}
        isMulti={true}
        options={countryOptions}
        styles={customStyles} // Add the custom styles here
      />
    </div>
  );
}
