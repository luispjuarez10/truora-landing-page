
import { Shield, Users, FileCheck } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Solutions</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Customer Engagement */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center rounded-md bg-[#4800FF] p-3 shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Customer Engagement</h3>
            <p className="text-gray-600 mb-6">
              Build stronger relationships with your customers through our advanced engagement platform. 
              Featuring real-time interactions, powerful analytics, and seamless integration capabilities.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• Real-time customer interaction</li>
              <li>• Advanced analytics dashboard</li>
              <li>• Seamless integration with existing systems</li>
              <li>• Custom workflow automation</li>
            </ul>
          </div>

          {/* ZapSign Solutions */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center rounded-md bg-[#4800FF] p-3 shadow-lg">
                <FileCheck className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">ZapSign Solutions</h3>
            <p className="text-gray-600 mb-6">
              A comprehensive electronic signature platform designed for businesses of all sizes.
              Secure, compliant, and easy to use.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• Digital signature compliance</li>
              <li>• Document workflow automation</li>
              <li>• Template management</li>
              <li>• Multi-party signing</li>
            </ul>
          </div>

          {/* Enterprise Security */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center rounded-md bg-[#4800FF] p-3 shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
            <p className="text-gray-600 mb-6">
              Bank-level security infrastructure to protect your business and customer data.
              Full compliance with US regulations and industry standards.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• End-to-end encryption</li>
              <li>• Regulatory compliance</li>
              <li>• Regular security audits</li>
              <li>• Advanced threat protection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
