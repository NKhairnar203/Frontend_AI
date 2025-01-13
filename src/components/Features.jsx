import React from "react";

const Features = () => {
  const features = [
    {
      title: "Smart Conversations",
      description: "Get intelligent responses to your queries.",
    },
    {
      title: "24/7 Availability",
      description: "Always available to assist you.",
    },
    { title: "Secure and Private", description: "Your data is safe with us." },
  ];

  return (
    <section id="features" className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
