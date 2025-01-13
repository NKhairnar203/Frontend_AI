import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "Amit", feedback: "This AI bot is super helpful and easy to use!" },
    { name: "Priya", feedback: "Great experience! Highly recommend it." },
    { name: "Rahul", feedback: "Makes life so much easier!" },
  ];

  return (
    <section id="testimonials" className="py-10 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          What People Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <h3 className="mt-4 text-lg font-bold text-indigo-600">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
