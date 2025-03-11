import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const modalVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.3, ease: "easeIn" } },
};

const LoginModal = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const termsRef = useRef(null);

  // Detect scroll position in Terms & Conditions
  useEffect(() => {
    const handleScroll = () => {
      if (termsRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = termsRef.current;
        setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 5);
      }
    };

    if (termsRef.current) {
      termsRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (termsRef.current) {
        termsRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    if (termsRef.current) {
      termsRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Main Modal */}
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
      >
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900" onClick={onClose}>
          <FiX size={24} />
        </button>

        {/* Login / Sign Up Form with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isSignUp ? "signup" : "login"}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-4">{isSignUp ? "Sign Up" : "Log In"}</h2>

            <form className="flex flex-col gap-4">
              {isSignUp && (
                <>
                  <input type="text" placeholder="Full Name" className="border p-2 rounded-md" required />
                  <input type="tel" placeholder="Phone Number" className="border p-2 rounded-md" required />
                  <select className="border p-2 rounded-md" required>
                    <option value="">Select Role</option>
                    <option value="employee">Employee</option>
                    <option value="employer">Employer</option>
                  </select>
                </>
              )}
              <input type="email" placeholder="Email" className="border p-2 rounded-md" required />
              {isSignUp && <input type="email" placeholder="Confirm Email" className="border p-2 rounded-md" required />}
              <input type="password" placeholder="Password" className="border p-2 rounded-md" required />
              {isSignUp && <input type="password" placeholder="Confirm Password" className="border p-2 rounded-md" required />}

              {isSignUp && (
                <div className="flex items-center gap-2">
                  <input type="checkbox" required />
                  <span className="text-sm">
                    I agree to the{" "}
                    <span className="text-blue-500 cursor-pointer underline" onClick={() => setShowTerms(true)}>
                      Terms & Conditions
                    </span>
                  </span>
                </div>
              )}

              <button className="mt-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full shadow-lg hover:from-red-600 hover:to-orange-600 transition duration-300">
                {isSignUp ? "Sign Up" : "Log In"}
              </button>
            </form>

            {/* Toggle Between Login & Sign Up */}
            <p className="text-sm text-center mt-2">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <span className="text-blue-500 cursor-pointer" onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? " Log in" : " Sign up"}
              </span>
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            className="bg-white p-6 rounded-lg shadow-lg w-96 h-96 relative flex flex-col"
          >
            <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900" onClick={() => setShowTerms(false)}>
              <FiX size={24} />
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">Terms & Conditions</h2>

            <div ref={termsRef} className="text-sm text-gray-700 space-y-4 overflow-y-auto flex-grow px-2" style={{ maxHeight: "320px" }}>
              <p>Welcome to HanapBuh.AI. By signing up and using our platform, you agree to comply with the following Terms & Conditions.</p>

              <h3 className="font-semibold">1. Introduction</h3>
              <p>HanapBuh.AI provides job-matching services using AI-driven resume analysis...</p>

              <h3 className="font-semibold">2. User Responsibilities</h3>
              <ul className="list-disc list-inside">
                <li>Provide accurate and truthful information.</li>
                <li>Do not use false identities or create multiple accounts.</li>
                <li>Ensure that your login credentials remain confidential.</li>
              </ul>

              <h3 className="font-semibold">3. Privacy Policy</h3>
              <p>We collect and store personal data in accordance with our Privacy Policy...</p>

              <h3 className="font-semibold">4. Account Security</h3>
              <p>You are responsible for safeguarding your account...</p>

              <h3 className="font-semibold">5. Prohibited Activities</h3>
              <ul className="list-disc list-inside">
                <li>Posting false job listings.</li>
                <li>Using automated scripts to access the platform.</li>
              </ul>

              <h3 className="font-semibold">6. Termination of Service</h3>
              <p>We reserve the right to suspend or terminate accounts...</p>

              <h3 className="font-semibold">7. Contact Information</h3>
              <p>For inquiries, please contact us at <span className="text-blue-500">support@hanapbuh.ai</span>.</p>
            </div>

            {isAtBottom && (
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300" onClick={scrollToTop}>
                Back to Top
              </button>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
