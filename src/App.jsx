import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import JobMatches from "./components/JobMatches";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onLoginClick={() => setIsModalOpen(true)} />
      <HeroSection />
      <HowItWorks />
      <JobMatches />
      <Footer />

      {/* Animated Modal */}
      <AnimatePresence>
        {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
