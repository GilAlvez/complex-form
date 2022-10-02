import { Button, Input, InputGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EditUser = () => {
  return (
    <section className="section">
      <h1>Edit Profile</h1>
      <p>description</p>
      <main className="w-full p-6 border border-white/20 rounded-lg md:p-12 ">
        <form className="flex flex-col gap-4">
          <InputGroup>
            <Input id="user" name="user" type="text" />
          </InputGroup>
          <InputGroup>
            <Input id="password" name="password" type="password" />
          </InputGroup>
          <div className="grid grid-cols-2 gap-4">
            <Link to={"/profile"}>
              <Button className="w-full">Back</Button>
            </Link>
            <Button>Edit</Button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default EditUser;
