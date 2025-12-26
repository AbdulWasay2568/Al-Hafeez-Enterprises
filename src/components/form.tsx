import React from "react";

const ContactForm = ({ formRef }) => {
  return (
    <section
      ref={formRef}
      id="contact"
      className="py-10 sm:py-20 px-4 sm:px-20"
    >
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg">
        <h2 className="text-2xl sm:text-3xl text-gray-500 font-bold mb-4 text-center">
          Get in touch
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mb-6 text-center">
          We'd love to hear from you. Please fill out this form.
        </p>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-sm text-gray-600 mb-1 font-bold text-left"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="First name"
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-600 mb-1 font-bold text-left"
                htmlFor="lastName"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm text-gray-600 mb-1 font-bold text-left"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="you@company.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm text-gray-600 mb-1 font-bold text-left"
              htmlFor="phoneNumber"
            >
              Phone number
            </label>
            <div className="relative">
              <select className="absolute left-0 top-0 h-full px-3 py-2 border-r rounded-l-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option value="US">US</option>
              </select>
              <input
                type="text"
                id="phoneNumber"
                className="w-full pl-24 pr-3 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm text-gray-600 mb-1 font-bold text-left"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="flex items-center text-sm text-gray-600 text-left">
              <input
                type="checkbox"
                className="form-checkbox rounded text-teal-500 focus:ring-teal-500"
              />
              <span className="ml-2">
                You agree to our friendly{" "}
                <a href="#" className="text-gray-600 underline">
                  privacy policy
                </a>
                .
              </span>
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-2 py-2 bg-teal-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
