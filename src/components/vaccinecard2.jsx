const VaccineCard2 = ({ image,rev,h3t,pt}) => {
  const totalStars = 5;
  const filledStars = 3; // change this value dynamically as needed
  return (
    <div className="bg-gray-200 shadow-md rounded-4xl p-4 w-64 flex-shrink-0 text-center">
      <img src="https://t4.ftcdn.net/jpg/02/01/98/73/360_F_201987380_YjR3kPM0PS3hF7Wvn7IBMmW1FWrMwruL.jpg" alt="Vaccine" className="h-32 w-full object-cover rounded-4xl mb-3" />
        <div className="flex justify-center space-x-1 text-yellow-400">
        {[...Array(totalStars)].map((_, i) => (
          <span key={i}>
            {i < filledStars ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.825 1.496 8.239L12 18.896l-7.432 4.474 1.496-8.239L.001 9.306l8.332-1.151z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            )}
          </span>
        ))}
      </div>
      <div className="text-sm text-gray-600 mt-1">{rev} Reviews</div>
      <h3 className="text-orange-500 font-semibold">{h3t}</h3>
      <p className="text-sm" dangerouslySetInnerHTML={{ __html: pt }}></p>
      <div className="mt-3 flex justify-center gap-2">
        <button className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">Call Us</button>
        <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">View More</button>
      </div>
    </div>
  );
};

export default VaccineCard2;
