import Header from "@/components/Header";
import { Shield, MessageSquare, FileCheck, Users, Globe, BarChart, Lock, Settings } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#4800FF] to-blue-600">
              Our Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools to transform your business operations and enhance customer relationships
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {/* WhatsApp Customer Engagement */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#25D366]/10 mr-4">
                        <img
                          src="/lovable-uploads/47d733f3-e46c-480c-aa5c-ed030d202920.png"
                          alt="WhatsApp"
                          className="h-10 w-10"
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">WhatsApp Customer Engagement</h2>
                    </div>
                    
                    <div className="mb-8">
                      <img 
                        src="/lovable-uploads/afa58d16-9cdc-40d0-a988-7ab6dd8ec664.png"
                        alt="WhatsApp Customer Engagement"
                        className="rounded-xl shadow-lg w-full"
                      />
                    </div>

                    <p className="text-lg text-gray-600 mb-8">
                      Transform your customer communication with our WhatsApp Business Platform integration. 
                      Build stronger relationships through real-time messaging and automated responses.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-start">
                        <MessageSquare className="w-6 h-6 text-[#25D366] mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Real-time Messaging</h3>
                          <p className="text-gray-600">Instant communication with customers through WhatsApp</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Settings className="w-6 h-6 text-[#25D366] mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Automation</h3>
                          <p className="text-gray-600">Smart chatbots and automated response systems</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-6 h-6 text-[#25D366] mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Multi-agent Support</h3>
                          <p className="text-gray-600">Collaborative customer service platform</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Globe className="w-6 h-6 text-[#25D366] mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Global Reach</h3>
                          <p className="text-gray-600">Connect with customers worldwide</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4">Additional Features</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-[#25D366] mr-2">•</span>
                          <span>Advanced analytics and reporting</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#25D366] mr-2">•</span>
                          <span>Custom workflow creation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#25D366] mr-2">•</span>
                          <span>Integration with CRM systems</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#25D366] mr-2">•</span>
                          <span>Message templates and quick replies</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#25D366]/5 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <BarChart className="w-5 h-5 text-[#25D366] mr-2" />
                          <span>Increased customer satisfaction</span>
                        </li>
                        <li className="flex items-start">
                          <Users className="w-5 h-5 text-[#25D366] mr-2" />
                          <span>Higher engagement rates</span>
                        </li>
                        <li className="flex items-start">
                          <MessageSquare className="w-5 h-5 text-[#25D366] mr-2" />
                          <span>Faster response times</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Electronic Signature */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="relative">
                  <img
                    src="/lovable-uploads/a8c72575-8144-4732-aead-c8c54652816d.png"
                    alt="ZapSign by Truora"
                    className="absolute top-0 right-0 h-8"
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#5584EB]/10 mr-4">
                        <img
                          src="/lovable-uploads/40acce34-32c5-43d9-aa97-57217b1f3cea.png"
                          alt="Electronic Signature"
                          className="h-10 w-10"
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Electronic Signature</h2>
                    </div>
                    
                    <div className="mb-8">
                      <img 
                        src="/lovable-uploads/e07c1fe6-9b71-405b-b7c1-8c5b2274939f.png"
                        alt="Electronic Signature Interface"
                        className="rounded-xl shadow-lg w-full"
                      />
                    </div>

                    <p className="text-lg text-gray-600 mb-8">
                      Streamline your document workflows with our secure and legally compliant electronic signature platform. 
                      Sign, send, and manage documents with ease.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-start">
                        <Shield className="w-6 h-6 text-[#5584EB] mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Legal Compliance</h3>
                          <p className="text-gray-600">Legally binding e-signatures worldwide</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Settings className="w-6 h-6 text-[#5584EB] mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Workflow Automation</h3>
                          <p className="text-gray-600">Automated document routing and signing</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FileCheck className="w-6 h-6 text-[#5584EB] mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Template Management</h3>
                          <p className="text-gray-600">Create and manage document templates</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Lock className="w-6 h-6 text-[#5584EB] mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">Advanced Security</h3>
                          <p className="text-gray-600">Enterprise-grade security features</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4">Additional Features</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-[#5584EB] mr-2">•</span>
                          <span>Bulk sending capabilities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#5584EB] mr-2">•</span>
                          <span>Document tracking and analytics</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#5584EB] mr-2">•</span>
                          <span>API integration options</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#5584EB] mr-2">•</span>
                          <span>Mobile-friendly signing</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#5584EB]/5 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <BarChart className="w-5 h-5 text-[#5584EB] mr-2" />
                          <span>Reduced processing time</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="w-5 h-5 text-[#5584EB] mr-2" />
                          <span>Enhanced security</span>
                        </li>
                        <li className="flex items-start">
                          <FileCheck className="w-5 h-5 text-[#5584EB] mr-2" />
                          <span>Improved document management</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
