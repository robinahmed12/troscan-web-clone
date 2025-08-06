"use client";
import React from "react";

const Container = ({
  children,
  className = "",
  fullWidth = false,
  noPadding = false,
  ...props
}) => {
  // Base container styles
  const baseClasses = "w-full mx-auto";

  // Handle fullWidth option
  const widthClass = fullWidth ? "max-w-full" : "max-w-7xl";

  // Handle padding options
  const paddingClass = noPadding
    ? ""
    : "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12";

  // Combine all classes
  const combinedClasses =
    `${baseClasses} ${widthClass} ${paddingClass} ${className}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

export default Container;
