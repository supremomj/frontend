import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { FaRobot, FaMoon, FaSun } from "react-icons/fa";

ChartJS.register(...registerables);

const EmployeeDashboard = () => {
  const [notifications, setNotifications] = useState([
    "New job recommendation: Frontend Developer at Google",
    "Interview scheduled with Amazon",
  ]);
  const [chatOpen, setChatOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Detect System Preference & Persist Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    console.log("Dark Mode:", darkMode); // Debugging Log
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Mock Job Listings
  const jobListings = [
    { id: 1, title: "Frontend Developer", company: "Google", location: "California, USA" },
    { id: 2, title: "Backend Engineer", company: "Amazon", location: "Seattle, USA" },
    { id: 3, title: "UI/UX Designer", company: "Tesla", location: "Texas, USA" },
    { id: 4, title: "Software Engineer", company: "Microsoft", location: "Washington, USA" },
    { id: 5, title: "React Developer", company: "Netflix", location: "Los Angeles, USA" },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col text-gray-900 dark:text-gray-100">
      <div className="flex flex-1 p-6 gap-6">
        
        {/* Sidebar */}
        <aside className="bg-white dark:bg-gray-800 w-64 p-4 shadow-lg rounded-lg flex flex-col">
          <div className="flex flex-col items-center border-b dark:border-gray-600 pb-4">
            <img src="/images/profile1.jpg" alt="Profile" className="w-20 h-20 rounded-full mb-2 shadow" />
            <p className="text-lg font-semibold">Mario John</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">Software Engineer</p>
          </div>

          {/* Dark Mode Toggle */}
          <button
            className="mt-4 flex items-center justify-center bg-gray-200 dark:bg-gray-700 p-2 rounded-lg"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800 dark:text-gray-100" />}
            <span className="ml-2">{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>

          <h2 className="text-lg font-semibold mt-4">Menu</h2>
          <ul className="mt-4 space-y-3 flex-grow">
            <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer">📰 Newsfeed</li>
            <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer">🏠 Dashboard</li>
            <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer">📄 My Applications</li>
            <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer">🔍 Job Listings</li>
            <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer">⚙️ Settings</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold">Welcome, Mario! 👋</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Here's an overview of your job applications and recommendations.</p>
            </div>

            {/* Scrollable Job Listings */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow max-h-64 overflow-y-auto">
              <h3 className="text-xl font-semibold mb-3">💼 Job Listings</h3>
              <ul className="space-y-4">
                {jobListings.map((job) => (
                  <li key={job.id} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                    <div>
                      <h4 className="text-lg font-semibold">{job.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{job.company} - {job.location}</p>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition">
                      Apply Now
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">🔔 Notifications</h3>
              <ul className="mt-2 space-y-2 max-h-32 overflow-auto">
                {notifications.map((note, index) => (
                  <li key={index} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow-md">{note}</li>
                ))}
              </ul>
            </div>

            {/* Job Analytics */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">📊 Job Application Analytics</h3>
              <Line data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [{ label: "Applications Sent", data: [5, 10, 8, 15, 12], borderColor: "blue", backgroundColor: "rgba(0, 0, 255, 0.2)", fill: true }],
              }} />
            </div>
          </div>
        </main>

        {/* Floating AI Chatbot Button */}
        <button 
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          onClick={() => setChatOpen(!chatOpen)}
        >
          <FaRobot size={24} />
        </button>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
