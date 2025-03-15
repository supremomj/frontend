import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import JobMatches from "./components/JobMatches";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import EmployeeDashboard from "./components/EmployeeDashboard";
import Newsfeed from "./components/Newsfeed";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar with Login Modal Trigger */}
        <Navbar onLoginClick={() => setIsModalOpen(true)} />

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<EmployeeDashboard />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Animated Login Modal */}
        <AnimatePresence>
          {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
        </AnimatePresence>
      </div>
    </Router>
  );
}

/* Extracted Home Component for Better Readability */
const Home = () => (
  <>
    <HeroSection />
    <HowItWorks />
    <JobMatches />
  </>
);

export default App;
