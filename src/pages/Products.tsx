
import { Shield, Users, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Solutions</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Customer Engagement */}
          <div className="rounded-lg bg-white p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center rounded-md bg-white p-3 shadow-lg">
                <img
                  src="/lovable-uploads/47d733f3-e46c-480c-aa5c-ed030d202920.png"
                  alt="Customer Engagement"
                  className="h-12 w-12"
                />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">WhatsApp Customer Engagement</h3>
            <p className="text-gray-600 mb-6">
              Transform your customer communication with our WhatsApp Business integration. 
              Build stronger relationships through real-time messaging and automated responses.
            </p>
            <h4 className="font-medium mb-4">Key Features:</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-[#25D366] mr-2">•</span>
                <span>Real-time customer messaging</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-2">•</span>
                <span>Automated response system</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-2">•</span>
                <span>Multi-agent support</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-2">•</span>
                <span>Business tool integrations</span>
              </li>
            </ul>
            <Link 
              to="/products/customer-engagement" 
              className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Electronic Signature */}
          <div className="rounded-lg bg-white p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center rounded-md bg-white p-3 shadow-lg">
                <img
                  src="/lovable-uploads/40acce34-32c5-43d9-aa97-57217b1f3cea.png"
                  alt="Electronic Signature"
                  className="h-12 w-12"
                />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Electronic Signature</h3>
            <p className="text-gray-600 mb-6">
              Streamline your document workflows with our secure electronic signature platform. 
              Sign, send, and manage documents effortlessly.
            </p>
            <h4 className="font-medium mb-4">Key Features:</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-[#5584EB] mr-2">•</span>
                <span>Legally binding e-signatures</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5584EB] mr-2">•</span>
                <span>Document workflow automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5584EB] mr-2">•</span>
                <span>Template management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5584EB] mr-2">•</span>
                <span>Advanced security features</span>
              </li>
            </ul>
            <Link 
              to="/products/electronic-signature" 
              className="inline-block bg-[#5584EB] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
