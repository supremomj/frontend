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
<<<<<<< HEAD
import Newsfeed from "./components/Newsfeed";
=======
>>>>>>> main

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
<<<<<<< HEAD
        {/* Navbar with Login Modal Trigger */}
        <Navbar onLoginClick={() => setIsModalOpen(true)} />

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<EmployeeDashboard />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
        </Routes>

        {/* Footer */}
=======
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

>>>>>>> main
        <Footer />

        {/* Animated Login Modal */}
        <AnimatePresence>
          {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
        </AnimatePresence>
      </div>
    </Router>
  );
}

<<<<<<< HEAD
/* Extracted Home Component for Better Readability */
const Home = () => (
  <>
    <HeroSection />
    <HowItWorks />
    <JobMatches />
  </>
);

=======
>>>>>>> main
export default App;
