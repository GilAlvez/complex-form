import { Button, Input, InputGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const StepUserInfo = () => {
  const testObject = {
    name: "name",
    email: "email@examplasfasfasfasfasfsafsfe.com",
    address: {
      street: "street",
      number: "number",
    },
  };

  return (
    <section className="w-full flex flex-col md:flex-row gap-6">
      <main className="w-full p-6 border border-white/20 rounded-lg md:p-12 ">
        <form className="flex flex-col gap-4">
          <InputGroup>
            <Input id="user" name="user" type="text" />
          </InputGroup>
          <InputGroup>
            <Input id="password" name="password" type="password" />
          </InputGroup>
          <div className="grid grid-cols-2 gap-4">
            <Link to={"/"}>
              <Button className="w-full">Back</Button>
            </Link>
            <Link to={"/new-user/basic-info"}>
              <Button className="w-full">Next</Button>
            </Link>
          </div>
        </form>
      </main>
      <pre className="text-xs">{JSON.stringify(testObject, null, 2)}</pre>
    </section>
  );
};

export default StepUserInfo;
