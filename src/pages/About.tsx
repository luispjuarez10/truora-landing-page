
const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Truora is a technology company that helps businesses connect with their customers through innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-[#4800FF]">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe in creating seamless connections between businesses and their customers. Our platform provides innovative solutions that help companies build trust and enhance their digital services.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-[#4800FF]">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the leading platform for business-customer relationships, enabling seamless, secure, and efficient interactions across all channels.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#4800FF]">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Innovation</h3>
              <p className="text-gray-600">Constantly pushing boundaries to create cutting-edge solutions</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Trust</h3>
              <p className="text-gray-600">Building secure and reliable platforms for our clients</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Customer Focus</h3>
              <p className="text-gray-600">Putting our customers' needs at the heart of everything we do</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-[#4800FF]">Global Presence</h2>
          <p className="text-gray-600 leading-relaxed">
            Headquartered in San Francisco with a growing presence across the Americas, we serve businesses of all sizes with our cutting-edge solutions. Our global team works tirelessly to provide innovative solutions that help companies succeed in the digital age.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
