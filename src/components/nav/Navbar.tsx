import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Bell } from "lucide-react";
import ThemeChange from "./Theme";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-6 sticky top-0 z-50">

      {/* LEFT — Brand + Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FaBars className="text-xl" />
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/teams">Teams</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </div>

        <div className="font-bold text-xl tracking-tight text-primary ml-1">
          BugTrackr
        </div>
      </div>

      {/* CENTER — Desktop Navigation */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-4 text-base-content">
          <li><NavLink className="hover:text-primary" to="/">Home</NavLink></li>
          <li><NavLink className="hover:text-primary" to="/about">About</NavLink></li>
          <li><NavLink className="hover:text-primary" to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink className="hover:text-primary" to="/teams">Teams</NavLink></li>
        </ul>
      </div>

      {/* RIGHT — Login/Register + Theme + Notifications + Profile */}
      <div className="navbar-end hidden md:flex items-center gap-4">

        {/* Theme Switch */}
        <ThemeChange />

        <ul className="menu menu-horizontal gap-4 text-base-content">
          <li><NavLink className="hover:text-primary" to="/register">Register</NavLink></li>
          <li><NavLink className="hover:text-primary" to="/login">Login</NavLink></li>
        </ul>

        {/* Notifications */}
        <button className="btn btn-ghost btn-circle relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="avatar cursor-pointer">
          <div className="w-9 rounded-full ring-2 ring-primary">
            <img src="https://i.pravatar.cc/100" alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
