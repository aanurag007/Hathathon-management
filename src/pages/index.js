import Navbar from "../components/Navbar";
import HackathonCard from "../components/HackathonCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    const fetchHackathons = async () => {
      const res = await fetch("http://localhost:5000/api/hackathons");
      const data = await res.json();
      setHackathons(data);
    };
    fetchHackathons();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Upcoming Hackathons</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hackathons.map((hackathon) => (
            <HackathonCard key={hackathon._id} hackathon={hackathon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
