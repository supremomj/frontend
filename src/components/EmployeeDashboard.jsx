import React, { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { FaRobot, FaTimes, FaStar, FaBullhorn } from "react-icons/fa";

ChartJS.register(...registerables);

const EmployeeDashboard = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  const [notifications, setNotifications] = useState([
    "New job recommendation: Frontend Developer at Google",
    "Interview scheduled with Amazon",
  ]);
  const [savedJobs, setSavedJobs] = useState([
    "Software Engineer - Microsoft",
    "UI/UX Designer - Tesla",
    "Backend Developer - Netflix",
  ]);
  const [chatOpen, setChatOpen] = useState(false);
  const [adVisible, setAdVisible] = useState(true);
  
  // Mock Job Listings
  const jobListings = [
    { id: 1, title: "Frontend Developer", company: "Google", location: "California, USA" },
    { id: 2, title: "Backend Engineer", company: "Amazon", location: "Seattle, USA" },
    { id: 3, title: "UI/UX Designer", company: "Tesla", location: "Texas, USA" },
    { id: 4, title: "Software Engineer", company: "Microsoft", location: "Washington, USA" },
    { id: 5, title: "React Developer", company: "Netflix", location: "Los Angeles, USA" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex flex-1 p-6 gap-6">
        
        {/* Sidebar */}
        <aside className="bg-white w-64 p-4 shadow-lg rounded-lg flex flex-col">
          <div className="flex flex-col items-center border-b pb-4">
          <img src="/images/profile1.jpg" alt="Profile" className="w-20 h-20 rounded-full mb-2 shadow" />
          <p className="text-lg font-semibold">Mario John</p>
            <p className="text-gray-500 text-sm">Software Engineer</p>
          </div>

          <h2 className="text-lg font-semibold mt-4">Menu</h2>
          <ul className="mt-4 space-y-3 flex-grow">
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">🏠 Dashboard</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">📄 My Applications</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">🔍 Job Listings</li>
            <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">⚙️ Settings</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold">Welcome, Mario! 👋</h2>
              <p className="mt-2 text-gray-600">Here's an overview of your job applications and recommendations.</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg shadow text-center hover:scale-105 transition">
                <h3 className="text-lg font-semibold text-blue-700">Active Applications</h3>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg shadow text-center hover:scale-105 transition">
                <h3 className="text-lg font-semibold text-green-700">Job Recommendations</h3>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg shadow text-center hover:scale-105 transition">
                <h3 className="text-lg font-semibold text-yellow-700">Interviews Scheduled</h3>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>

            {/* Scrollable Job Listings */}
            <div className="bg-white p-6 rounded-lg shadow max-h-64 overflow-y-auto">
              <h3 className="text-xl font-semibold mb-3">💼 Job Listings</h3>
              <ul className="space-y-4">
                {jobListings.map((job) => (
                  <li key={job.id} className="bg-gray-100 p-3 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-200 transition">
                    <div>
                      <h4 className="text-lg font-semibold">{job.title}</h4>
                      <p className="text-gray-600">{job.company} - {job.location}</p>
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
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">🔔 Notifications</h3>
              <ul className="mt-2 space-y-2 max-h-32 overflow-auto">
                {notifications.map((note, index) => (
                  <li key={index} className="bg-gray-100 p-3 rounded-lg shadow-md">{note}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">⭐ Saved Jobs</h3>
              <ul className="mt-2 space-y-2 max-h-32 overflow-auto">
                {savedJobs.map((job, index) => (
                  <li key={index} className="bg-gray-100 p-3 rounded-lg shadow-md flex justify-between items-center">
                    <span>{job}</span>
                    <FaStar className="text-yellow-500" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Job Analytics */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">📊 Job Application Analytics</h3>
              <Line data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [{ label: "Applications Sent", data: [5, 10, 8, 15, 12], borderColor: "blue", backgroundColor: "rgba(0, 0, 255, 0.2)", fill: true }],
              }} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
