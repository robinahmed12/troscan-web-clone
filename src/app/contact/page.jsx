import React from "react";
import Container from "../components/ui/Container";

const Contact = () => {
  return (
    <div 
      className="min-h-screen py-16 px-4"
      style={{ backgroundColor: 'rgb(248, 237, 227)' }}
    >
      <Container>
        <div className="pt-20 pb-8">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="mb-8">
              <div 
                className="w-24 h-1 mx-auto rounded-full mb-6"
                style={{ backgroundColor: 'rgb(141, 73, 58)' }}
              ></div>
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: 'rgb(141, 73, 58)' }}
            >
              Let's Bring Your <br className="hidden sm:block" /> 
              Vision to Life
            </h1>
            <p 
              className="text-lg md:text-xl max-w-2xl mx-auto opacity-80"
              style={{ color: 'rgb(141, 73, 58)' }}
            >
              Ready to start your next project? Get in touch and let's create something amazing together.
            </p>
          </div>

          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
              
              {/* Image Section */}
              <div className="lg:w-1/2">
                <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700">
                  {/* Decorative background */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(141, 73, 58, 0.1) 0%, rgba(248, 237, 227, 0.3) 100%)'
                    }}
                  ></div>
                  
                  <img
                    src="https://framerusercontent.com/images/6xHF1tiKqVhkLcgxSQVr1G2X8.jpeg"
                    alt="Contact visual"
                    className="w-full h-auto rounded-3xl object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ maxHeight: "600px", minHeight: "400px" }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl"
                    style={{ 
                      background: 'linear-gradient(45deg, rgba(141, 73, 58, 0.4) 0%, rgba(248, 237, 227, 0.2) 100%)'
                    }}
                  ></div>
                </div>
              </div>

              {/* Form Section */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 lg:p-12 h-full">
                  {/* Company Info */}
                  

                  {/* Form */}
                  <form className="space-y-8">
                    <div className="space-y-8">
                      
                      {/* Phone Input */}
                      <div className="group">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold mb-3 transition-colors duration-300"
                          style={{ color: 'rgb(141, 73, 58)' }}
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            className="w-full px-0 py-4 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-b-2 transition-all duration-300 text-lg placeholder-opacity-60"
                            style={{ 
                              borderBottomColor: 'rgba(141, 73, 58, 0.3)',
                              color: 'rgb(141, 73, 58)'
                            }}
                            placeholder="Enter your phone number"
                          />
                          <div 
                            className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-focus-within:w-full"
                            style={{ backgroundColor: 'rgb(141, 73, 58)' }}
                          ></div>
                        </div>
                      </div>

                      {/* Message Input */}
                      <div className="group">
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold mb-3 transition-colors duration-300"
                          style={{ color: 'rgb(141, 73, 58)' }}
                        >
                          Your Message
                        </label>
                        <div className="relative">
                          <textarea
                            id="message"
                            rows={5}
                            className="w-full px-0 py-4 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-b-2 transition-all duration-300 text-lg resize-none placeholder-opacity-60"
                            style={{ 
                              borderBottomColor: 'rgba(141, 73, 58, 0.3)',
                              color: 'rgb(141, 73, 58)'
                            }}
                            placeholder="Tell us about your project..."
                          ></textarea>
                          <div 
                            className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-focus-within:w-full"
                            style={{ backgroundColor: 'rgb(141, 73, 58)' }}
                          ></div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="group relative w-full sm:w-auto px-10 py-4 rounded-full font-semibold text-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1 transform overflow-hidden"
                          style={{ backgroundColor: 'rgb(141, 73, 58)' }}
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            <span className="mr-3">Send Message</span>
                            <svg 
                              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </span>
                          
                          {/* Hover overlay */}
                          <div 
                            className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                            style={{ backgroundColor: 'rgba(141, 73, 58, 0.8)' }}
                          ></div>
                        </button>
                      </div>

                    </div>
                  </form>

                  {/* Contact Info Footer */}
                  <div className="mt-12 pt-8 border-t border-opacity-20" style={{ borderColor: 'rgb(141, 73, 58)' }}>
                    <div className="flex flex-wrap gap-6 text-sm opacity-70" style={{ color: 'rgb(141, 73, 58)' }}>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Remote Team</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>Available 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-32 left-8 w-32 h-32 rounded-full opacity-5 pointer-events-none hidden lg:block"
               style={{ backgroundColor: 'rgb(141, 73, 58)' }}
          ></div>
          <div className="absolute bottom-32 right-8 w-24 h-24 rounded-full opacity-5 pointer-events-none hidden lg:block"
               style={{ backgroundColor: 'rgb(141, 73, 58)' }}
          ></div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;