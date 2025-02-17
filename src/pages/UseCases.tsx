
const UseCases = () => {
  const cases = [
    {
      title: "Customer Acquisition",
      description: "Accelerate your customer onboarding process with automated workflows and secure document validation.",
      benefits: [
        "50% reduction in customer acquisition costs",
        "Streamlined onboarding with automated document validation",
        "Enhanced conversion rates through optimized workflows",
        "Real-time customer verification and validation",
        "Automated KYC and document processing",
        "Reduced manual intervention in onboarding"
      ],
      features: [
        "Digital onboarding automation",
        "Multi-channel customer verification",
        "Custom workflow creation",
        "Real-time analytics and reporting",
        "Integration with existing CRM systems"
      ]
    },
    {
      title: "Automated Sales",
      description: "Optimize your sales process with intelligent automation and real-time customer verification.",
      benefits: [
        "30% increase in sales efficiency",
        "Automated lead qualification and scoring",
        "Reduced sales cycle duration",
        "Improved conversion rates",
        "Enhanced customer data accuracy",
        "Streamlined sales operations"
      ],
      features: [
        "Automated lead qualification",
        "Intelligent customer segmentation",
        "Sales process automation",
        "Performance analytics",
        "Integration with sales tools"
      ]
    },
    {
      title: "Customer Success",
      description: "Enhance customer satisfaction and retention through seamless document management and communication.",
      benefits: [
        "40% improvement in customer satisfaction",
        "Faster issue resolution times",
        "Increased customer retention rates",
        "Enhanced customer engagement",
        "Improved service delivery",
        "Better customer insights"
      ],
      features: [
        "Automated customer support",
        "Document workflow automation",
        "Customer communication tools",
        "Success metrics tracking",
        "Integration with support systems"
      ]
    },
    {
      title: "Marketing Automation",
      description: "Create targeted campaigns and improve conversion rates with automated customer verification.",
      benefits: [
        "25% increase in marketing ROI",
        "Improved campaign targeting",
        "Enhanced customer segmentation",
        "Better lead quality",
        "Automated campaign optimization",
        "Data-driven decision making"
      ],
      features: [
        "Campaign automation tools",
        "Customer journey mapping",
        "Marketing analytics",
        "Multi-channel integration",
        "Performance tracking"
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
              <ul className="space-y-2 mb-6">
                {useCase.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="text-[#4800FF] mr-2">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-medium mb-3">Features:</h4>
              <ul className="space-y-2">
                {useCase.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="text-[#4800FF] mr-2">•</span>
                    <span>{feature}</span>
                  </li>
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
