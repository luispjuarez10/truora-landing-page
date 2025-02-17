
const ElectronicSignature = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <img
            src="/lovable-uploads/40acce34-32c5-43d9-aa97-57217b1f3cea.png"
            alt="Electronic Signature"
            className="h-16 w-16 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">Electronic Signature</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure, legal, and efficient document signing solution for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#5584EB] mr-2">•</span>
                <span>Legally binding electronic signatures</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5584EB] mr-2">•</span>
                <span>Document template management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5584EB] mr-2">•</span>
                <span>Automated workflow creation</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Security & Compliance</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#5584EB] mr-2">•</span>
                <span>Advanced encryption standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5584EB] mr-2">•</span>
                <span>Audit trail and document tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5584EB] mr-2">•</span>
                <span>Compliance with international standards</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicSignature;
