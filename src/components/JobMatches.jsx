const JobMatches = () => {
  const jobs = [
    { title: "Software Engineer", company: "TechCorp" },
    { title: "Marketing Specialist", company: "BrandCo" },
    { title: "Data Analyst", company: "AI Solutions" },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Top Job Matches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
          >
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p className="text-gray-600 hover:text-gray-200">{job.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobMatches;
