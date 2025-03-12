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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onLoginClick={() => setIsModalOpen(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <HowItWorks />
                <JobMatches />
              </>
            }
          />
          <Route path="/dashboard" element={<EmployeeDashboard />} />
        </Routes>

        <Footer />

        {/* Animated Login Modal */}
        <AnimatePresence>
          {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
