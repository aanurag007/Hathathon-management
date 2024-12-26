const HackathonCard = ({ hackathon }) => {
    return (
      <div className="border p-4 rounded shadow-md bg-white">
        <h2 className="text-xl font-semibold">{hackathon.title}</h2>
        <p className="text-gray-700 mt-2">{hackathon.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          Start: {new Date(hackathon.startDate).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-500">
          End: {new Date(hackathon.endDate).toLocaleDateString()}
        </p>
      </div>
    );
  };
  
  export default HackathonCard;
  