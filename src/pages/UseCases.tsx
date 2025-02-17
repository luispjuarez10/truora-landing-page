
import Header from "@/components/Header";

const UseCases = () => {
  const cases = [
    {
      title: "Customer Acquisition",
      problem: "Slow and manual customer onboarding processes",
      solution: "Automated WhatsApp chatbots",
      benefit: "Identity validation and customer profiling",
      description: "Accelerate your customer onboarding process with automated workflows and secure document validation.",
      metrics: "50% reduction in customer acquisition costs",
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
      problem: "Manual and time-consuming sales processes",
      solution: "AI-powered sales automation",
      benefit: "Increased conversion rates and efficiency",
      description: "Optimize your sales process with intelligent automation and real-time customer verification.",
      metrics: "30% increase in sales efficiency",
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
      problem: "Disconnected customer support channels",
      solution: "Unified communication platform",
      benefit: "Enhanced customer satisfaction",
      description: "Create seamless customer experiences with integrated communication channels.",
      metrics: "40% improvement in customer satisfaction",
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
      problem: "Inefficient marketing campaigns",
      solution: "Data-driven marketing automation",
      benefit: "Improved campaign performance",
      description: "Create targeted campaigns and improve conversion rates with automated customer verification.",
      metrics: "25% increase in marketing ROI",
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Use Cases</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our solutions can transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {cases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl">
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <h3 className="text-2xl font-bold mb-6 text-[#4800FF]">{useCase.title}</h3>
                      <p className="text-lg text-gray-600 mb-4">{useCase.metrics}</p>
                    </div>
                    <div className="md:col-span-2">
                      <div className="space-y-6">
                        <div className="bg-red-50 p-4 rounded-lg">
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-2">Problem</span>
                          <p className="text-gray-800">{useCase.problem}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-2">Solution</span>
                          <p className="text-gray-800">{useCase.solution}</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">Benefit</span>
                          <p className="text-gray-800">{useCase.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#4800FF] mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
