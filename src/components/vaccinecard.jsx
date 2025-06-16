const VaccineCard = ({ image,btn,h3t,pt}) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-4xl p-4 w-64 flex-shrink-0 text-center">
      <img src="https://t4.ftcdn.net/jpg/02/01/98/73/360_F_201987380_YjR3kPM0PS3hF7Wvn7IBMmW1FWrMwruL.jpg" alt="Vaccine" className="h-32 w-full object-cover rounded-4xl mb-3" />
      <button className="bg-blue-600 text-white px-4 py-1 rounded-full mb-2">{btn}</button>
      <h3 className="text-orange-500 font-semibold">{h3t}</h3>
      <p className="text-sm" dangerouslySetInnerHTML={{ __html: pt }}></p>
      <div className="mt-3 flex justify-center gap-2">
        <button className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">Call Us</button>
        <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">View More</button>
      </div>
    </div>
  );
};

export default VaccineCard;
