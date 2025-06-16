import React, { useEffect, useRef, useState } from 'react';
import VaccineCard from './vaccinecard';

const VaccineCarousel = ({ data, head }) => {
  const visibleCards = 4;
  const totalCards = data.length;

  const [currentIndex, setCurrentIndex] = useState(visibleCards);
  const [transitioning, setTransitioning] = useState(true);
  const sliderRef = useRef(null);

  // Clone last and first few cards
  const extendedData = [
    ...data.slice(-visibleCards), // Clone last 4 at start
    ...data,
    ...data.slice(0, visibleCards), // Clone first 4 at end
  ];

  const handleNext = () => {
    if (currentIndex < totalCards + visibleCards) {
      setTransitioning(true);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setTransitioning(true);
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Handle reset from clones
  useEffect(() => {
    if (currentIndex === totalCards + visibleCards) {
      setTimeout(() => {
        setTransitioning(false);
        setCurrentIndex(visibleCards);
      }, 300);
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setTransitioning(false);
        setCurrentIndex(totalCards);
      }, 300);
    }
  }, [currentIndex, totalCards]);

  return (
    <div className="py-6 relative mx-[80px] overflow-hidden">
      <h2 className="text-2xl font-bold text-center text-blue-700">Corporate Health</h2>
      <p className="text-center text-lg text-blue-600 mb-4">{head}</p>

      {/* Arrows */}
      <div
        onClick={handlePrev}
        className="cursor-pointer text-3xl text-blue-700 absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full"
      >
        {"<"}
      </div>
      <div
        onClick={handleNext}
        className="cursor-pointer text-3xl text-blue-700 absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full"
      >
        {">"}
      </div>

      {/* Carousel Viewport */}
      <div className="overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex"
          style={{
            transition: transitioning ? 'transform 0.3s ease-in-out' : 'none',
            transform: `translateX(-${currentIndex * 25}%)`,
            width: `100%`, // 25% per card
          }}
        >
          {extendedData.map((item, i) => (
            <div key={i} className="w-[25%] px-2 shrink-0">
              <VaccineCard btn={item.btn} h3t={item.h3t} pt={item.pt1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VaccineCarousel;
