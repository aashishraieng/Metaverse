import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Hash, BookOpen } from "lucide-react";

export default function JoiningForm() {
  const [isValidPhoneNum, setIsValidPhoneNum] = useState(null);
  const [isValidRegNo, setIsValidRegNo] = useState(null);
  const [phoneNumText, setPhoneNum] = useState("");
  const [regnoText, setRegNo] = useState("");

  const handleRegInput = (e) => {
    const value = e.target.value.trim();
    setRegNo(value);
    setIsValidRegNo(value === "" ? null : /\d+$/.test(value));
  };

  const handlePhoneNumInp = (e) => {
    const value = e.target.value.trim();
    setPhoneNum(value);
    setIsValidPhoneNum(value === "" ? null : /^\d{10}$/.test(value));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-teal-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 border border-teal-200 transition-all duration-700 hover:shadow-teal-300">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 transition-all duration-500">
            Join <span className="text-teal-600">MetaVerce</span> & Unlock Your Journey!
          </h2>
          <form className="space-y-6">
            {/* Full Name */}
            <div className="transition-all duration-300">
              <label className="block font-semibold mb-1 text-gray-700 flex items-center gap-2">
                <User className="w-5 h-5 text-teal-600" /> Full Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Registration Number */}
            <div>
              <label className="block font-semibold mb-1 text-gray-700 flex items-center gap-2">
                <Hash className="w-5 h-5 text-teal-600" /> Registration Number
              </label>
              <input
                type="text"
                value={regnoText}
                onChange={handleRegInput}
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ease-in-out ${
                  isValidRegNo === null
                    ? "border-gray-300"
                    : isValidRegNo
                    ? "border-green-500"
                    : "border-red-500"
                } focus:outline-none focus:ring-2 ${
                  isValidRegNo
                    ? "focus:ring-green-400"
                    : isValidRegNo === false
                    ? "focus:ring-red-400"
                    : "focus:ring-teal-300"
                }`}
                placeholder="Enter your registration number"
                required
              />
              {isValidRegNo !== null && (
                <p
                  className={`text-sm mt-1 transition-opacity duration-300 ${
                    isValidRegNo ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isValidRegNo ? "Looks good!" : "Please enter a valid registration number."}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block font-semibold mb-1 text-gray-700 flex items-center gap-2">
                <Phone className="w-5 h-5 text-teal-600" /> Phone Number
              </label>
              <input
                type="text"
                value={phoneNumText}
                onChange={handlePhoneNumInp}
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ease-in-out ${
                  isValidPhoneNum === null
                    ? "border-gray-300"
                    : isValidPhoneNum
                    ? "border-green-500"
                    : "border-red-500"
                } focus:outline-none focus:ring-2 ${
                  isValidPhoneNum
                    ? "focus:ring-green-400"
                    : isValidPhoneNum === false
                    ? "focus:ring-red-400"
                    : "focus:ring-teal-300"
                }`}
                placeholder="0000000000"
                required
              />
              {isValidPhoneNum !== null && (
                <p
                  className={`text-sm mt-1 transition-opacity duration-300 ${
                    isValidPhoneNum ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isValidPhoneNum ? "Looks good!" : "Please provide a valid 10-digit phone number."}
                </p>
              )}
            </div>

            {/* Department */}
            <div>
              <label className="block font-semibold mb-1 text-gray-700 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-600" /> Department / Stream
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 ease-in-out"
                placeholder="e.g., CSE"
                required
              />
            </div>

            {/* Submit */}
            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(13, 148, 136, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
              >
                Submit Application
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
