import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Hackathon Manager</h1>
        <div className="space-x-4">
          <Link href="/">
            <p className="hover:underline">Home</p>
          </Link>
          <Link href="/dashboard">
            <p className="hover:underline">Dashboard</p>
          </Link>
          <Link href="/auth/login">
            <p className="hover:underline">Login</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
