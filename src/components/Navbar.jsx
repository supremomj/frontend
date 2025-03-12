import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ onLoginClick }) => {
  const location = useLocation(); // Get the current route
  const navigate = useNavigate(); // For navigation (logout)

  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/"); // Redirect to homepage after logout
  };

  return (
    <nav className="w-full bg-black py-4 px-6 flex justify-between items-center text-white">
      <h1 className="text-2xl font-bold text-white">HanapBuh.AI</h1>

      {/* Dashboard-Specific Navbar */}
      {location.pathname === "/dashboard" ? (
        <ul className="flex gap-8 mx-auto text-base relative">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Messages</li>
          <li className="hover:text-gray-300 cursor-pointer">Find a Job</li>
          <li className="hover:text-gray-300 cursor-pointer">Upload Resume with AI</li>

          {/* How It Works with Dropdown */}
          <li
            className="hover:text-gray-300 cursor-pointer relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            How It Works
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-48">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Employer FAQs</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Employee FAQs</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Learn to Outsource</li>
              </ul>
            )}
          </li>
        </ul>
      ) : (
        // Default Navbar for Non-Dashboard Pages
        <ul className="flex gap-6 text-base">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">How It Works</li>
          <li className="hover:text-gray-300 cursor-pointer">Job Seekers</li>
          <li className="hover:text-gray-300 cursor-pointer">Employers</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      )}

      {/* Show Login button on regular pages, Logout button on dashboard */}
      {location.pathname === "/dashboard" ? (
        <button
          onClick={handleLogout}
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={onLoginClick}
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
        >
          Sign Up / Log In
        </button>
      )}
    </nav>
  );
};

export default Navbar;
