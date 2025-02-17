
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-shrink-0">
              <img
                className="h-16 w-auto"
                src="/lovable-uploads/f0311879-f89e-440d-8ff5-9a6b71d52fcb.png"
                alt="Truora"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/products">
                <Button variant="ghost" className="text-gray-600 hover:text-[#4800FF]">
                  Products
                </Button>
              </Link>
              <Link to="/use-cases">
                <Button variant="ghost" className="text-gray-600 hover:text-[#4800FF]">
                  Use Cases
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost" className="text-gray-600 hover:text-[#4800FF]">
                  About Us
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-[#1A1F2C] sm:text-5xl md:text-6xl">
                  <span className="block">We connect</span>
                  <span className="block text-[#4800FF]">businesses and people</span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl">
                  Simplify access to your digital services and securely enhance your relationship with customers
                </p>
                <div className="mt-8">
                  <img
                    src="/lovable-uploads/df7148e5-8ed3-4bce-815a-417476ed3e7c.png"
                    alt="Truora Solutions"
                    className="mx-auto max-w-full h-auto"
                  />
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
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {/* Solution 1 - Customer Engagement */}
                <Link to="/products/customer-engagement" className="pt-6">
                  <div className="flow-root rounded-lg bg-white px-6 pb-8 shadow-lg transition-transform hover:scale-105 border-2 border-[#25D366]">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-[#25D366] p-3 shadow-lg">
                        <img
                          src="/lovable-uploads/47d733f3-e46c-480c-aa5c-ed030d202920.png"
                          alt="Customer Engagement"
                          className="h-6 w-6"
                        />
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-[#1A1F2C]">
                        Customer Engagement
                      </h3>
                      <p className="mt-5 text-base text-gray-600">
                        Build stronger relationships with your customers through our advanced engagement platform. Real-time interactions and powerful analytics.
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Solution 2 - Electronic Signature */}
                <Link to="/products/electronic-signature" className="pt-6">
                  <div className="flow-root rounded-lg bg-white px-6 pb-8 shadow-lg transition-transform hover:scale-105 border-2 border-[#5584EB]">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-[#5584EB] p-3 shadow-lg">
                        <img
                          src="/lovable-uploads/40acce34-32c5-43d9-aa97-57217b1f3cea.png"
                          alt="Electronic Signature"
                          className="h-6 w-6"
                        />
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-[#1A1F2C]">
                        Electronic Signature
                      </h3>
                      <p className="mt-5 text-base text-gray-600">
                        Streamline your document workflows with our secure electronic signature platform. Sign, send, and manage documents effortlessly.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-600">
              <p>Battery Street, San Francisco, California 94111, US</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
