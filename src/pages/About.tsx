import Header from "@/components/Header";

const About = () => {
  const founders = [
    {
      name: "Daniel Bilbao",
      role: "CEO & Co-founder",
      image: "/lovable-uploads/c1a740ff-c07f-4458-92f9-783ccee58a4b.png"
    },
    {
      name: "Maite Muniz",
      role: "COO & Co-founder",
      image: "/lovable-uploads/544888d3-befa-4699-b5db-469daf556a5f.png"
    },
    {
      name: "David Cuadrado",
      role: "CTO & Co-founder",
      image: "/lovable-uploads/41a3a1a4-769c-4c47-9783-473d0277c126.png"
    },
    {
      name: "Cesar Pino",
      role: "Co-founder",
      image: "/lovable-uploads/5a688452-153c-4cc0-a973-9c5b8e21a131.png"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries to create cutting-edge solutions"
    },
    {
      title: "Trust",
      description: "Building secure and reliable platforms for our clients"
    },
    {
      title: "Customer Focus",
      description: "Putting customers' needs at the heart of everything"
    },
    {
      title: "Excellence",
      description: "Striving for the highest quality in all we do"
    },
    {
      title: "Collaboration",
      description: "Working together to achieve exceptional results"
    },
    {
      title: "Integrity",
      description: "Acting with honesty and transparency"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-[#4800FF]">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto">
              {founders.map((founder, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <div className="relative mb-4">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                  <p className="text-gray-600">{founder.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-[#4800FF]">Global Presence</h2>
            <p className="text-gray-600 leading-relaxed">
              Headquartered in San Francisco with a growing presence across the Americas, we serve businesses of all sizes with our cutting-edge solutions. Our global team works tirelessly to provide innovative solutions that help companies succeed in the digital age.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
