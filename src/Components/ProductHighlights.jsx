import React from "react";
import { motion } from "framer-motion";

const images = [
    { src: "/d.avif", text: "Modern Living", subtext: "Experience elegance", link: "/modern-living" },
    { src: "/Bedroom.jpeg", text: "Cozy Bedroom", subtext: "Comfort & style", link: "/cozy-bedroom" },
    { src: "/Hero.jpeg", text: "Luxury Space", subtext: "Refined aesthetics", link: "/luxury-space" },
    { src: "/blueprint.jpeg", text: "Smart Planning", subtext: "Designed to perfection", link: "/smart-planning" },
  ];
  

const ProductHighlights = () => {
  return (
    <div className="translate-y-[-360px] px-16">
      <div className="grid grid-cols-2 gap-12 p-4 w-4/5 mx-auto">
        {images.map((image, index) => (
          <a href={image.link} key={index} className="block">
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer w-full p-2"
              whileHover={{ scale: 1.07 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img src={image.src} alt={image.text} className="w-full h-auto rounded-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5 text-white">
                <h3 className="text-lg font-semibold">{image.text}</h3>
                <p className="text-xs opacity-80">{image.subtext}</p>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductHighlights;