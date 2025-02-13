import React, { useState, useEffect } from "react";
import 'remixicon/fonts/remixicon.css';

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

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default country

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      if (!document.getElementById("google_translate_element").innerHTML) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL },
          "google_translate_element"
        );
      }
    };

    if (isDropdownOpen) {
      addGoogleTranslateScript();
      setTimeout(() => {
        window.googleTranslateElementInit();
      }, 500);
    }
  }, [isDropdownOpen]);

  return (
    <>
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-4 py-4 bg-black text-white text-xl md:text-3xl flex-wrap space-y-4 md:space-y-0">
        <div className="flex items-center space-x-6 md:space-x-10 flex-wrap justify-center">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span role="img" aria-label={item.label}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-6 md:space-x-10 flex-wrap justify-center">
          {rightNavItems.map((item, index) => (
            typeof item === "string" ? (
              <div key={index} className="cursor-pointer">{item}</div>
            ) : (
              <div key={index} className="flex items-center space-x-3">
                <span role="img" aria-label={item.label}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-6 bg-white text-black border-b space-y-6 md:space-y-0">
        <div className="flex items-center space-x-12 w-full md:w-auto justify-center md:justify-start">
          <div className="text-4xl font-semibold flex items-center space-x-6 rounded-lg">
            <img src="logo.jpeg" alt="Slasa" className="h-20 w-20 md:h-24 md:w-24 rounded-full" />
          </div>

          <div className="text-2xl md:text-3xl flex flex-wrap md:flex-nowrap space-x-6 md:space-x-12 justify-center">
            <div className="font-bold px-5 md:px-6 cursor-pointer">Home</div>
            <div className="font-bold px-5 md:px-6 cursor-pointer">Shop</div>
            <div className="font-bold px-5 md:px-6 cursor-pointer">Services</div>
            <div className="font-bold px-5 md:px-6 cursor-pointer">About Us</div>
            <div className="font-bold px-5 md:px-6 cursor-pointer">Contact</div>
          </div>
        </div>

        <div className="flex items-center space-x-6 md:space-x-12 w-full md:w-auto mt-6 md:mt-0 justify-center md:justify-end">
          <div className="relative flex items-center bg-gray-100 py-2 px-4 md:py-3 md:px-8 rounded-md w-full md:w-auto">
            <i className="ri-search-line absolute left-8 text-gray-800 text-xl md:text-2xl"></i>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent focus:outline-none text-xl md:text-2xl pl-16 w-full text-gray-800"
            />
          </div>

          <div className="flex items-center space-x-6 md:space-x-12 font-bold text-2xl md:text-3xl">
            <i className="ri-user-line text-2xl md:text-3xl"></i>
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
                <span className="text-2xl">{selectedCountry.flag}</span>
                <i className="ri-global-line"></i>
                <i className="ri-arrow-down-s-line"></i>
              </div>

              {/* Dropdown Menu */}
              <div 
                className={`absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-xl p-4 z-50 border border-gray-200 transition-all duration-300 ease-in-out transform ${isDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
              >
                {/* Google Translate */}
                <div className="text-2xl font-semibold text-gray-700 mb-2">Select Language</div>
                <div className="flex justify-center items-center">
                  <div className="p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300 flex justify-center items-center">
                    <div id="google_translate_element" className="text-gray-700"></div>
                  </div>
                </div>

                {/* Country Selection */}
                <div className="mt-4">
                  <div className="text-2xl font-semibold text-gray-700 mb-2">Select Country</div>
                  <ul className="space-y-2">
                    {countries.map((country, index) => (
                      <li 
                        key={index} 
                        className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                        onClick={() => {
                          setSelectedCountry(country);
                          setIsDropdownOpen(false);
                        }}
                      >
                        <span className="text-2xl">{country.flag}</span>
                        <span className="text-lg">{country.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </>
  );
};

export default Navbar;
