import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ to, className = "", children }) => {
  return (
    <Link to={to} className={`font-medium text-primary-600 hover:underline ${className}`}>{children}</Link>
  )
}

export default CustomLink
