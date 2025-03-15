import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import { FaMoon, FaSun, FaArrowUp, FaArrowDown, FaComment } from "react-icons/fa";

const Newsfeed = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [newsPosts, setNewsPosts] = useState([
        {
            id: 1,
            title: "Tech Industry Booms in 2025",
            content: "The technology industry has seen exponential growth in AI and cloud computing...",
            source: "TechCrunch",
            upvotes: 120,
            comments: 35,
        },
        {
            id: 2,
            title: "Remote Work Trends Continue",
            content: "More companies are adopting permanent remote work policies to adapt to new norms...",
            source: "Forbes",
            upvotes: 98,
            comments: 20,
        },
        {
            id: 3,
            title: "AI Advancements in Healthcare",
            content: "Medical AI is transforming patient care with predictive analytics and automation...",
            source: "CNN Health",
            upvotes: 75,
            comments: 15,
        },
    ]);

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
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
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
                    <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer">🌍 Newsfeed</li>
                    <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer">🏠 Dashboard</li>
                    <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer">📄 My Applications</li>
                    <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer">🔍 Job Listings</li>
                    <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer">⚙️ Settings</li>
                </ul>
            </aside>

            {/* Newsfeed Content */}
            <div className="flex-1 p-6 ml-4 mt-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">📰 Newsfeed</h1>
                </div>

                <div className="space-y-6">
                    {newsPosts.map((post) => (
                        <div key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex gap-4">
                            <div className="flex flex-col items-center">
                                <button className="text-gray-600 dark:text-gray-300 hover:text-red-500"><FaArrowUp /></button>
                                <span className="font-semibold">{post.upvotes}</span>
                                <button className="text-gray-600 dark:text-gray-300 hover:text-blue-500"><FaArrowDown /></button>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">{post.content}</p>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Source: {post.source}</p>
                                <div className="mt-2 flex items-center text-gray-500 dark:text-gray-400">
                                    <FaComment className="mr-2" /> {post.comments} Comments
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Newsfeed;
