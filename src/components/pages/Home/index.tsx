import { Link, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to={"/create-user"}>Create New User</Link>
      <Outlet />
    </div>
  );
};

export default Home;
