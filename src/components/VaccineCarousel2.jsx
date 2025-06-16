import React, { useRef } from 'react';
import VaccineCard2 from './vaccinecard2';



const VaccineCarousel2 = ({data,head}) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="py-6 relative mx-[80px]">
      <h2 className="text-2xl font-bold text-center text-blue-700">Corporate Health</h2>
      <p className="text-center text-lg text-blue-600 mb-4">{head}</p>

      {/* Scroll Buttons */}
      <button onClick={scrollLeft} className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full">
        ◀
      </button>
      <button onClick={scrollRight} className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full">
        ▶
      </button>

      {/* Carousel */}
      <div ref={scrollRef} className="flex justify-center gap-4 overflow-x-auto px-6 scroll-smooth scrollbar-hide">

        {data?.map((index, i) => (
          <VaccineCard2 key={i}  rev={index.rev} h3t={index.h3t} pt={index.pt1} />
        ))}
      </div>
      
    </div>
  );
};

export default VaccineCarousel2;
