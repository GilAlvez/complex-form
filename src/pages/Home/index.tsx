import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TextField from "../../components/Inputs/TextField";

const Home = () => {
  // HERE VALIDATE IF IS LOGGED OR NOT

  return (
    <section className="h-screen grid place-items-center">
      <main className="w-5/6 p-6 border border-white/20 rounded-lg md:w-3/6 md:p-12 lg:w-2/6">
        <form className="flex flex-col gap-4">
          <TextField label="Username or email" name="user" type="text" disabled />

          <TextField label="Password" name="password" type="password" showPass disabled />

          <div className="grid grid-cols-2 gap-4">
            <Button className="w-full" disabled>
              Login
            </Button>
            <Link to={"/new-user/basic-info"}>
              <Button className="w-full">New User</Button>
            </Link>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Home;
