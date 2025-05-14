import React from "react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-600">Metaverse</h3>
            <p className="text-gray-300">
              Join our community and be part of something extraordinary.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Members
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-600">Contact Us</h3>
            <p className="text-gray-300">
              <a href="mailto:info@Metaverse.com">info@Metaverse.com</a>
            </p>
            <p className="text-gray-300">
              <a href="https://instagram.com/" className="hover:text-white">
                Instagram
              </a>
            </p>
            <p className="text-gray-300">Phone: +91 (123) 456-7890</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Metaverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
