"use client"

import { useState, useEffect, useCallback } from "react"
import "./Carousal.css"

const Carousel = () => {
  // images are loaded
  const item = [
    {
      image: "/Carousal/Shoe_1.jpg",
      title: "Item 1",
    },
    {
      image: "/Carousal/Shoe_2.jpg",
      title: "Item 2",
    },
    {
      image: "/Carousal/Shoe_3.jpg",
      title: "Item 3",
    },
    {
      image: "/Carousal/Shoe_4.jpg",
      title: "Item 4",
    },
    {
      image: "/Carousal/Shoe_5.jpg",
      title: "Item 5",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-slide interval in milliseconds (3 seconds)
  const autoSlideInterval = 2000

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.length)
  }, [item.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + item.length) % item.length)
  }, [item.length])

  // Set up automatic sliding
  useEffect(() => {
    let intervalId

    if (!isPaused) {
      intervalId = setInterval(() => {
        nextSlide()
      }, autoSlideInterval)
    }

    // Clean up the interval when component unmounts or when isPaused changes
    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isPaused, nextSlide])

  // Pause auto-sliding when user interacts with carousel
  const handleInteraction = () => {
    setIsPaused(true)

    // Resume auto-sliding after 5 seconds of inactivity
    const resumeTimeout = setTimeout(() => {
      setIsPaused(false)
    }, 2000)

    // Clean up timeout if user interacts again before it completes
    return () => clearTimeout(resumeTimeout)
  }

  // Handler functions that pause auto-sliding
  const handleNext = () => {
    handleInteraction()
    nextSlide()
  }

  const handlePrev = () => {
    handleInteraction()
    prevSlide()
  }

  const handleDotClick = (index) => {
    handleInteraction()
    setCurrentIndex(index)
  }

  return (
    <>
      <div
        className="carousel-container inset-0 w-screen h-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="w-screen h-full">
          <div className="w-screen h-full overflow-hidden">
            <div
              className="carousel-track flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {item.map((item, index) => (
                <div key={index} className="carousel-slide w-screen h-full flex-shrink-0">
                  {item.video ? (
                    <video controls className="w-full h-full object-cover">
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Previous Button */}
          {/* <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black hover:bg-white hover:text-black bg-opacity-50 text-white cursor-pointer p-2 sm:p-3 rounded-full hover:bg-opacity-80 transition-all z-50"
          >
            ❮
          </button> */}

          {/* Next Button */}
          {/* <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black hover:bg-white hover:text-black bg-opacity-50 text-white cursor-pointer p-2 sm:p-3 rounded-full hover:bg-opacity-80 transition-all z-50"
          >
            ❯
          </button> */}

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {item.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                  currentIndex === index ? "bg-white scale-110" : "bg-gray-400"
                } transition-all duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel

