import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 p-16">
      <h1 className="font-bold text-4xl">Welcome to The Tenency Admin Panel</h1>
      <p className="font-medium">Only the admin can visit this page 👇</p>
      <Link to="/admin/login">
        <button className="bg-black rounded-2xl text-white p-3 cursor-pointer mt-4 hover:bg-green-400 font-medium">Admin Login</button>
      </Link>
    </div>
  );
};

export default Home;
