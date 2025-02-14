
const UseCases = () => {
  const cases = [
    {
      title: "Customer Acquisition",
      description: "Accelerate your customer onboarding process with automated workflows and secure document validation.",
      benefits: [
        "Reduce customer acquisition costs",
        "Streamline onboarding processes",
        "Improve conversion rates",
        "Enhanced customer experience"
      ]
    },
    {
      title: "Automated Sales",
      description: "Optimize your sales process with intelligent automation and real-time customer verification.",
      benefits: [
        "Automated lead qualification",
        "Faster deal closure",
        "Reduced operational costs",
        "Improved sales efficiency"
      ]
    },
    {
      title: "Customer Success",
      description: "Enhance customer satisfaction and retention through seamless document management and communication.",
      benefits: [
        "Improved customer satisfaction",
        "Reduced support tickets",
        "Faster resolution times",
        "Better customer retention"
      ]
    },
    {
      title: "Marketing Automation",
      description: "Create targeted campaigns and improve conversion rates with automated customer verification.",
      benefits: [
        "Better lead quality",
        "Increased conversion rates",
        "Targeted marketing campaigns",
        "ROI optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Use Cases</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {cases.map((useCase, index) => (
            <div key={index} className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#4800FF]">{useCase.title}</h3>
              <p className="text-gray-600 mb-6">{useCase.description}</p>
              <h4 className="font-medium mb-3">Key Benefits:</h4>
              <ul className="space-y-2">
                {useCase.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-gray-600">• {benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
