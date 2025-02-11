
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Users, FileCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src="/lovable-uploads/f0311879-f89e-440d-8ff5-9a6b71d52fcb.png"
                alt="Truora"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-[#1A1F2C] sm:text-5xl md:text-6xl">
                  <span className="block">We connect</span>
                  <span className="block text-[#9b87f5]">businesses and people</span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Simplify access to your digital services and securely enhance your relationship with customers
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Button className="flex w-full items-center justify-center gap-2 bg-[#9b87f5] hover:bg-[#8b77e5]">
                      Get Started
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button variant="outline" className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        
        {/* Solutions Section */}
        <div className="bg-gray-50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1F2C] sm:text-4xl">
                Our Solutions
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-600">
                Streamline your operations with our powerful business solutions
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Solution 1 - Customer Engagement */}
                <div className="pt-6">
                  <div className="flow-root rounded-lg bg-white px-6 pb-8 shadow-lg transition-transform hover:scale-105">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-[#9b87f5] p-3 shadow-lg">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-[#1A1F2C]">
                        Customer Engagement
                      </h3>
                      <p className="mt-5 text-base text-gray-600">
                        Build stronger relationships with your customers through our advanced engagement platform. Real-time interactions and powerful analytics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution 2 - Document Management */}
                <div className="pt-6">
                  <div className="flow-root rounded-lg bg-white px-6 pb-8 shadow-lg transition-transform hover:scale-105">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-[#9b87f5] p-3 shadow-lg">
                        <FileCheck className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-[#1A1F2C]">
                        ZapSign Solutions
                      </h3>
                      <p className="mt-5 text-base text-gray-600">
                        Streamline your document workflows with our secure electronic signature platform. Sign, send, and manage documents effortlessly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution 3 - Security */}
                <div className="pt-6">
                  <div className="flow-root rounded-lg bg-white px-6 pb-8 shadow-lg transition-transform hover:scale-105">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-[#9b87f5] p-3 shadow-lg">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-[#1A1F2C]">
                        Enterprise Security
                      </h3>
                      <p className="mt-5 text-base text-gray-600">
                        Bank-level security and full compliance with US regulations. Your data is protected with state-of-the-art encryption.
                      </p>
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

export default Index;
