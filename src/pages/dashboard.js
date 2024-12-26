import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold">My Dashboard</h1>
        <p>Here, you can track your hackathons.</p>
      </div>
    </>
  );
};

export default Dashboard;
