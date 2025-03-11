const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="w-full bg-black py-4 px-6 flex justify-between items-center text-white">
      <div className="mx-auto flex justify-between items-center w-full">
      <h1 className="text-2xl font-bold text-white">HanapBuh.AI</h1>
      <ul className="flex gap-6">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">How It Works</li>
          <li className="hover:text-gray-300 cursor-pointer">Job Seekers</li>
          <li className="hover:text-gray-300 cursor-pointer">Employers</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
        <button 
          onClick={onLoginClick} 
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
        >
          Sign Up / Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
