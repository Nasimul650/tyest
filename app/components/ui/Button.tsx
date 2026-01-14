import Link from "next/link";
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  href?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children = "Book a call",
  href = "/book-call",
  size = "md",
  className = "",
  onClick,
}) => {
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center
        ${sizes[size]}
        font-medium
        rounded-full
        overflow-hidden
        bg-[#CCFF00] text-black
        group
        border-[#CCFF00]
        border
        transition-shadow duration-300
        hover:shadow-lg
        ${className}
      `}
    >
      {/* Hover background */}
      <span
        className="
          absolute inset-0
          bg-[#282828]
          translate-y-full
          transition-transform duration-300 ease-out
          group-hover:translate-y-0
        "
      />

      {/* Text wrapper */}
      <span className="relative block overflow-hidden h-[1em]">
        {/* Default text */}
        <span
          className="
            flex justify-center items-center
            transition-transform duration-300 ease-out
            group-hover:-translate-y-full leading-none
          "
        >
          {children}
        </span>

        {/* Hover text */}
        <span
          className="
            absolute left-0 top-full
            block
          text-gray-200
            transition-transform duration-300 ease-out
            group-hover:-translate-y-full leading-none
          "
        >
          {children}
        </span>
      </span>
    </Link>
  );
};

export default Button;
