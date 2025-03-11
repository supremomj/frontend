const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">&copy; 2025 HanapBuh.AI. All Rights Reserved.</p>
        
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
