import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-white dark:bg-gray-900 shadow-md px-6">

      {/* Logo */}
      <div className="flex-1">
        <a className="text-xl font-bold text-gray-800 dark:text-white cursor-pointer">
          CS – Ticket System
        </a>
      </div>

      {/* Menu */}
      <div className="flex-none hidden md:flex gap-6 items-center">
        <a className="text-gray-700 dark:text-gray-300 hover:text-primary cursor-pointer">
          Home
        </a>

        <a className="text-gray-700 dark:text-gray-300 hover:text-primary cursor-pointer">
          FAQ
        </a>

        <a className="text-gray-700 dark:text-gray-300 hover:text-primary cursor-pointer">
          Changelog
        </a>

        <a className="text-gray-700 dark:text-gray-300 hover:text-primary cursor-pointer">
          Blog
        </a>

        <a className="text-gray-700 dark:text-gray-300 hover:text-primary cursor-pointer">
          Contact
        </a>

        <button className="btn btn-primary">
          + New Ticket
        </button>
      </div>

    </div>
  );
};

export default Navbar;