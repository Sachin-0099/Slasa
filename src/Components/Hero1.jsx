import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Hides arrows for a cleaner UI
    fade: true, // Adds smooth fade transition
  };

  const images = [
    { src: "./d.avif", text:"Premium Acrylic Products & Professional Renovation Services"},
    { src: "./Bedroom.jpeg", text: "Comfort & Luxury", subtext: "Transform your space with elegance." },
    { src: "./Hero.jpeg", text: "Build Your Dream Home", subtext: "Quality. Precision. Perfection." },

    { src: "./blueprint.jpeg", text: "Expert Planning", subtext: "From blueprint to reality." },
    { src: "./Hero2.jpeg", text: "Modern Living", subtext: "Designed for the future." },
    { src: "./stairs.jpeg", text: "Architectural Beauty", subtext: "Unique and innovative designs." },
    { src: "./stairs2.jpeg", text: "Creative Stairways", subtext: "Elevate your interiors." },
    { src: "./kitchen.jpeg", text: "Stylish Kitchens", subtext: "Where function meets beauty." },
    { src: "./washroom.jpeg", text: "Luxurious Washrooms", subtext: "Relax in style." },
  ];

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="relative">
            {/* Image */}
            <img
              src={item.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[70vh] object-cover rounded-lg shadow-xl"
            />
            {/* Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex flex-col justify-center items-center text-white text-center px-6 pb-16">
              {/* Heading */}
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-3">{item.text}</h1>
              {/* Subtext */}
              <p className="text-lg md:text-xl font-medium drop-shadow-md max-w-[80%] mb-6">
                {item.subtext}
              </p>
              {/* Buttons */}
              <div className="flex gap-6">
  <button className="px-8 py-4 border-2 border-white text-white bg-transparent rounded-full font-semibold shadow-lg hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:scale-105">
    Explore Now
  </button>
  <button className="px-8 py-4 border-2 border-gray-300 text-gray-300 bg-transparent rounded-full font-semibold shadow-lg hover:bg-gray-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105">
    Shop Now
  </button>
</div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;