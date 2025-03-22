import React from "react";

const images = [
  "/Carousal/Shoe_1.jpg",
  "/Carousal/Shoe_2.jpg",
  "/Carousal/Shoe_3.jpg",
  "/Carousal/Shoe_4.jpg",
  "/Carousal/Shoe_5.jpg",
  "/Carousal/Shoe_1.jpg",
  "/Carousal/Shoe_2.jpg",
  "/Carousal/Shoe_3.jpg",
  "/Carousal/Shoe_4.jpg",
  "/Carousal/Shoe_5.jpg",
  "/Carousal/Shoe_2.jpg",
  "/Carousal/Shoe_3.jpg",
];

const Gallery = () => {
  return (
    <div className="p-6 bg-gray-100">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-cyan-600 mb-6">Gallery</h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg border border-gray-300 hover:shadow-2xl transition"
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
