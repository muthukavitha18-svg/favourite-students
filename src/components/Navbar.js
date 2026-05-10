import React from "react";
import { Link } from "react-router-dom";
import { useStudent } from "../context/StudentContext";

const Navbar = () => {
  const { favourites } = useStudent();

  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold tracking-wide">🎓 Student App</h1>
      <div className="flex gap-6 text-sm font-medium">
       
        <Link to="/" className="hover:text-yellow-300 transition">
          Student List
        </Link>
        <Link to="/favourites" className="hover:text-yellow-300 transition flex items-center gap-1">
          ⭐ Favourites
          {favourites.length > 0 && (
            <span className="bg-yellow-400 text-indigo-900 rounded-full text-xs px-2 py-0.5 font-bold">
              {favourites.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
