import React, { useState } from "react";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({ name: "", feedback: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.feedback.trim()) {
      setFeedbacks([...feedbacks, formData]);

      setFormData({ name: "", feedback: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-500 mb-8">
        We Value Your Feedback
      </h1>

      {/* Feedback Form */}
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="feedback"
            className="block text-gray-700 font-medium mb-2"
          >
            Your Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
            placeholder="Write your feedback here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition"
        >
          Submit Feedback
        </button>
      </form>

      {/* Feedback Display Section */}
      {/* <div className="mt-10 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Recent Feedback
        </h2>
        {feedbacks.length > 0 ? (
          <ul className="space-y-4">
            {feedbacks.map((feedback, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border"
              >
                <p className="text-gray-700">
                  <span className="font-medium text-indigo-600">
                    {feedback.name}:
                  </span>{" "}
                  {feedback.feedback}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No feedback submitted yet.</p>
        )}
      </div> */}
    </div>
  );
};

export default Feedback;
