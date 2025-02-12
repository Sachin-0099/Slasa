import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* Furniture */}
        <div>
          <h4 className="font-bold text-lg mb-4">Furniture</h4>
          <ul className="text-gray-700 text-base space-y-6">
            <li><a href="#">Bedroom</a></li>
            <li><a href="#">Sofa and Seating</a></li>
            <li><a href="#">Living Room</a></li>
            <li><a href="#">Dining Room</a></li>
            <li><a href="#">Mattresses</a></li>
            <li><a href="#">Office</a></li>
            <li><a href="#">Outdoor</a></li>
            <li><a href="#">Modular</a></li>
          </ul>
        </div>

        {/* Household */}
        <div>
          <h4 className="font-bold text-lg mb-4">Household</h4>
          <ul className="text-gray-700 text-base space-y-6">
            <li><a href="#">Bedding</a></li>
            <li><a href="#">Lighting</a></li>
            <li><a href="#">Dining</a></li>
            <li><a href="#">Kitchen</a></li>
            <li><a href="#">Decor & Fragrance</a></li>
            <li><a href="#">Cushions</a></li>
            <li><a href="#">Wall décor & Mirrors</a></li>
            <li><a href="#">Garden & Outdoor</a></li>
            <li><a href="#">Bath & Laundry</a></li>
            <li><a href="#">Storage</a></li>
            <li><a href="#">Rugs</a></li>
            <li><a href="#">Windows</a></li>
          </ul>
        </div>

        {/* Baby & Kids */}
        <div>
          <h4 className="font-bold text-lg mb-4">Baby & Kids</h4>
          <ul className="text-gray-700 text-base space-y-6 ">
            <li><a href="#">Kids Beds</a></li>
            <li><a href="#">Room Furniture</a></li>
            <li><a href="#">Mattresses</a></li>
            <li><a href="#">Décor & Lighting</a></li>
            <li><a href="#">Bedding & Windows</a></li>
            <li><a href="#">Bath & Storage</a></li>
            <li><a href="#">Toys</a></li>
            <li><a href="#">Eat & Drink</a></li>
            <li><a href="#">Rugs & Carpets</a></li>
          </ul>
        </div>

        {/* New Arrivals */}
        <div>
          <h4 className="font-bold text-lg mb-4">New Arrivals</h4>
          <ul className="text-gray-700 text-base space-y-6">
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Bedding & Cushions</a></li>
            <li><a href="#">Lighting</a></li>
            <li><a href="#">Dining & Kitchen</a></li>
            <li><a href="#">Decor & Fragrance</a></li>
            <li><a href="#">Bath, Laundry & Storage</a></li>
            <li><a href="#">Rugs & Carpets</a></li>
            <li><a href="#">Windows</a></li>
            <li><a href="#">Baby & Kids</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-bold text-lg mb-4">About</h4>
          <ul className="text-gray-700 text-base space-y-6">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Write to us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Take a Tour</a></li>
            <li><a href="#">Shukran</a></li>
            <li><a href="#">In-Store Offers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">B2B Design Services</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-bold text-lg mb-4">Help</h4>
          <ul className="text-gray-700 text-base space-y-6">
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns Process</a></li>
            <li><a href="#">Returns Policy</a></li>
            <li><a href="#">Warranty</a></li>
            <li><a href="#">Help Centre</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;