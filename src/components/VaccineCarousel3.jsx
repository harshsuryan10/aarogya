import React, { useRef, useState } from 'react';
import VaccineCard from './vaccinecard';

const VaccineCarousel3 = ({ data, head }) => {
  const scrollRef = useRef(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handleCalendarClick = () => {
    setShowCalendar(true);
  };

  return (
    <div className="py-6 relative mx-[80px]">
      <h2 className="text-2xl font-bold text-center text-blue-700">Corporate Health</h2>
      <p className="text-center text-lg text-blue-600 mb-4">{head}</p>

      {/* Show this button only when not viewing calendar */}
    
        <div className="flex justify-center mb-6">
          <button
            onClick={handleCalendarClick}
            className="bg-orange-500 text-white font-semibold py-2 px-4 rounded flex items-center gap-2 hover:bg-orange-600"
          >
            Health Talks & Seminars Calendar
            <span role="img" aria-label="calendar">📅</span>
          </button>
        </div>
      

      {/* Calendar View */}
      {showCalendar ? (
        <div className="grid grid-cols-4 gap-4 px-4 md:grid-cols-6 text-center">
          {[
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
          ].map((month, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg p-4 font-semibold text-blue-800 cursor-pointer hover:bg-blue-100"
            >
              {month} <br/><span className='text-blue-950'>(Year)</span>
            </div>
          ))}
          <p className="col-span-full text-red-500 text-sm text-center mt-4">
            Note: Per List’s Provide in Excel Sheet format (Please ask if not found)
          </p>
        </div>
      ) : (
        <>
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full"
          >
            ▶
          </button>

          {/* Carousel View */}
          <div ref={scrollRef} className="flex justify-center gap-4 overflow-x-auto px-6 scroll-smooth scrollbar-hide">
            {data?.map((index, i) => (
              <VaccineCard key={i} btn={index.btn} h3t={index.h3t} pt={index.pt1} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default VaccineCarousel3;
