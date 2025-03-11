const HowItWorks = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {[
          { step: "Upload Resume", icon: "📤" },
          { step: "AI Analyzes Your Profile", icon: "🤖" },
          { step: "Get Matched with Employers", icon: "🔍" },
          { step: "Receive Interview Invitations", icon: "📩" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
          >
            <span className="text-4xl">{item.icon}</span>
            <p className="mt-3 font-semibold">{item.step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
