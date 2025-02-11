
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Users, FileCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Streamline Your</span>
                  <span className="block text-primary">Document Management</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Transform your business with ZapSign's powerful electronic signature solution. Fast, secure, and compliant with US regulations.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Button className="flex w-full items-center justify-center gap-2">
                      Get Started
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="bg-gray-50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Us
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500">
                Experience the future of document management with our trusted solutions
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="pt-6">
                  <div className="flow-root rounded-lg bg-white px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-primary p-3 shadow-lg">
                        <FileCheck className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        Easy Document Signing
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        Sign documents anywhere, anytime with our intuitive electronic signature platform.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="pt-6">
                  <div className="flow-root rounded-lg bg-white px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-primary p-3 shadow-lg">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        Secure & Compliant
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        Bank-level security and full compliance with US electronic signature regulations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="pt-6">
                  <div className="flow-root rounded-lg bg-white px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-primary p-3 shadow-lg">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        Team Collaboration
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        Streamline workflows with easy team collaboration and document management.
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
