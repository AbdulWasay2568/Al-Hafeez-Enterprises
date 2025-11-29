import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign up for our newsletter</h2>
        <p className="mb-6 text-gray-500">Be the first to know about releases and industry news and insights.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center w-full max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-4 py-2 w-full sm:w-64 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button 
            type="submit" 
            className="px-6 py-2 w-full sm:w-auto bg-teal-600 text-white rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 mt-2 sm:mt-0"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">We care about your data in our <a href="#" className="text-teal-500 underline">privacy policy</a>.</p>
      </div>
    </section>
  );
};

export default NewsletterSection;
