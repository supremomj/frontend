import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand & About Section */}
        <div>
          <h1 className="text-xl font-semibold">HanapBuh.AI</h1>
          <p className="text-sm opacity-70 mt-2">
            Your AI-powered job-matching platform. Connecting talent with opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-medium mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h2 className="text-lg font-medium mb-3">Stay Updated</h2>
          <p className="text-sm opacity-70">Subscribe to our newsletter for the latest job trends.</p>
          <div className="mt-3 flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-2 rounded-l bg-gray-800 text-white border-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-500 px-4 py-2 rounded-r hover:bg-yellow-600">Subscribe</button>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm opacity-70">
        &copy; 2025 HanapBuh.AI. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
