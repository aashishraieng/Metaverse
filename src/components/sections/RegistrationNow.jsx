import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function RegistrationNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);
    setSubmitted(true);

    setFormData({ name: "", email: "", event: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-700"
      style={{
        transition: "all 0.3s ease-in-out",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-gray-800 text-white rounded-3xl shadow-xl p-10 space-y-8 transition-all duration-300 ease-in-out hover:ring-4 hover:ring-indigo-500"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-100 mb-4">
          ✨ Register Now for an Event!
        </h2>

        {submitted && (
          <p className="text-green-600 text-center font-medium mb-6">
            🎉 Registration submitted successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <motion.input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full px-5 py-3 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
              placeholder="Enter your name"
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <motion.input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-5 py-3 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
              placeholder="you@example.com"
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:shadow-xl hover:ring-4 hover:ring-indigo-600 transition-all duration-300 ease-in-out"
            >
              Submit Registration 🚀
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
