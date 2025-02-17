
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img
              className="h-16 w-auto"
              src="/lovable-uploads/f0311879-f89e-440d-8ff5-9a6b71d52fcb.png"
              alt="Truora"
            />
          </Link>
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
  );
};

export default Header;
