import React from 'react';

const PropertySection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto my-8 border border-gray-200 rounded-lg overflow-hidden shadow-lg gap-12">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="../../../../Images/Photo.jpg" // Replace with the actual image path
          alt="Modern Interior Staircase"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Content */}
      <div className="w-full md:w-1/2 p-8 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Buying & Selling Property In An Easy Way
        </h2>
        <p className="text-gray-500 mb-6">
          Distinctively re-engineer revolutionary meta-services and premium At vero eos et
          accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi.
        </p>

        {/* Vision Section */}
        <div className="mb-6 flex items-start">
          <div className="mr-4 text-blue-500">
            {/* Icon Placeholder (replace with an actual SVG or image icon) */}
            <span className="text-4xl">🏠</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-500">
              Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex items-start">
          <div className="mr-4 text-green-500">
            {/* Icon Placeholder (replace with an actual SVG or image icon) */}
            <span className="text-4xl">📈</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-500">
              Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySection;
