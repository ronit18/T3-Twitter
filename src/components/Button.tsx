import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  small?: boolean;
  gray?: boolean;
  className: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  small,
  gray,
  className,
}) => {
  const sizeClass = small ? "px-2 py-1" : "px-4 py-2 font-bold";
  const grayClasses = gray
    ? "bg-gray-400 hover:bg-gray-300 focus-visible:bg-gray-300"
    : "focus-visible:bg-bule-300 bg-blue-400 hover:bg-blue-300";

  return (
    <button
      className={`rounded-full px-4 py-2 font-bold text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${grayClasses} ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
