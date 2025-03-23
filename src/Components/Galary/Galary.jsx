import React, { useState } from "react";

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
  const [selectedImage, setSelectedImage] = useState(null);

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
            onClick={() => setSelectedImage(src)} // Open modal on click
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0  bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative p-6 rounded-lg shadow-xl w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-auto bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Glowing Border */}
            <div className="absolute inset-0 rounded-lg ring-4 animate-pulse before:absolute before:inset-0 before:rounded-lg before:ring-4 before:animate-border before:ring-cyan-400"></div>

            <button
              className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-red-500"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
