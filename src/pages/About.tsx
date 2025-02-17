
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

        <div className="prose prose-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-8">
            We believe in creating seamless connections between businesses and their customers. Our platform provides innovative solutions that help companies build trust and enhance their digital services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="space-y-4 mb-8">
            <li>Innovation in every solution</li>
            <li>Customer success as our priority</li>
            <li>Security and trust in all operations</li>
            <li>Continuous improvement and growth</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Global Presence</h2>
          <p className="mb-8">
            Headquartered in San Francisco with a growing presence across the Americas, we serve businesses of all sizes with our cutting-edge solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
