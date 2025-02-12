import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css';  // Import Remix icons

const navItems = [
  { icon: "🚚", label: "Free Shipping" },
  { icon: "🖥️", label: "Click & Collect" },
  { icon: "📅", label: "Warranty" }
];

const rightNavItems = [
  "B2B & Design Services",
  { icon: "📍", label: "Deliver to area" },
  "Store Locator",
  "Help",
  "Sell With Us"
];

const countries = [
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "Bahrain", flag: "🇧🇭" },
  { name: "Kuwait", flag: "🇰🇼" },
  { name: "Oman", flag: "🇴🇲" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Qatar", flag: "🇶🇦" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "Arabic" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Saudi Arabia");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <>
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-8 py-4 bg-black text-white text-2xl md:text-3xl flex-wrap space-y-4">
        <div className="flex items-center space-x-10 flex-wrap justify-center">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-5">
              <span role="img" aria-label={item.label}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-10 flex-wrap justify-center">
          {rightNavItems.map((item, index) => (
            typeof item === "string" ? (
              <div key={index} className="cursor-pointer">{item}</div>
            ) : (
              <div key={index} className="flex items-center space-x-5">
                <span role="img" aria-label={item.label}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6 bg-white text-black border-b space-y-6 md:space-y-0">
        <div className="flex items-center space-x-12 w-full md:w-auto justify-center md:justify-start">
          <div className="text-4xl font-semibold flex items-center space-x-6 rounded-lg">
            <img src="logo.jpeg" alt="Slasa" className="h-24 w-24 rounded-full" />
          </div>

          <div className="text-3xl md:text-4xl flex flex-wrap md:flex-nowrap space-x-10 md:space-x-12 justify-center">
            <div className="font-bold px-5 md:px-6 cursor-pointer">Home</div>
            <div className="font-bold px-5 md:px-6 cursor-pointer">Shop</div>
            <div className="font-bold px-5 md:px-6 cursor-pointer">Services</div>
            <div className="font-bold px-5 md:px-6 cursor-pointer">About Us</div>
            <div className="font-bold px-5 md:px-6 cursor-pointer">Contact</div>
          </div>
        </div>

        <div className="flex items-center space-x-10 w-full md:w-auto mt-6 md:mt-0 justify-center md:justify-end">
          <div className="relative flex items-center bg-gray-100 py-5 px-8 rounded-md w-full md:w-auto mr-0 md:mr-10">
            <i className="ri-search-line absolute left-8 text-gray-800"></i>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent focus:outline-none text-2xl md:text-3xl pl-16 w-full text-gray-800"
            />
          </div>

          <div className="flex items-center space-x-6 md:space-x-12 font-bold text-2xl md:text-4xl">
            <i className="ri-user-line text-3xl md:text-5xl"></i>
            <span>Sign Up</span>
            <span>or</span>
            <span>Sign In</span>
          </div>

          <div className="flex items-center space-x-6 md:space-x-12 text-3xl md:text-5xl">
            <i className="ri-heart-line"></i>
            <i className="ri-shopping-bag-line"></i>

            {/* Language & Country Dropdown */}
            <div className="relative">
              <div 
                className="flex items-center space-x-2 px-4 py-3 bg-gray-100 rounded-lg cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <i className="ri-global-line"></i>
                <i className="ri-arrow-down-s-line"></i>
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-2 z-50">
                  
                  {/* Language Selection */}
                  <div className="border-b px-4 py-2 text-gray-500 text-lg">Select Language</div>
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 rounded-lg ${
                        selectedLanguage === lang.label ? "font-bold" : ""
                      }`}
                      onClick={() => {
                        setSelectedLanguage(lang.label);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <span className="ml-3 text-2xl">{lang.label}</span>
                      {selectedLanguage === lang.label && (
                        <i className="ri-check-line text-green-600"></i>
                      )}
                    </div>
                  ))}

                  {/* Country Selection */}
                  <div className="border-b px-4 py-2 text-gray-500 text-lg mt-2">Select Country</div>
                  {countries.map((country, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 rounded-lg ${
                        selectedCountry === country.name ? "font-bold" : ""
                      }`}
                      onClick={() => {
                        setSelectedCountry(country.name);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <span className="text-lg">{country.flag}</span>
                      <span className="ml-3 flex-1 text-2xl">{country.name}</span>
                      {selectedCountry === country.name && (
                        <i className="ri-check-line text-green-600"></i>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
