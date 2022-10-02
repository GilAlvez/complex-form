import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // HERE VALIDATE IF IS LOGGED OR NOT

  return (
    <section className="h-screen grid place-items-center">
      <main className="w-5/6 p-6 border border-white/20 rounded-lg md:w-3/6 md:p-12 lg:w-2/6">
        <form className="flex flex-col gap-4">
          <FormControl /* isInvalid={true} */>
            <FormLabel>Username or email</FormLabel>
            <Input name="user" type="text" />
            <FormErrorMessage>
              Enter a valid username or email that you created.
            </FormErrorMessage>
          </FormControl>

          <FormControl /* isInvalid={true} */>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input name="password" type={show ? "text" : "password"} />
              <InputRightElement width="4rem">
                <Button size="xs" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              Make sure your password is correct
            </FormErrorMessage>
          </FormControl>

          <div className="grid grid-cols-2 gap-4">
            <Link to={"/profile"}>
              <Button className="w-full">Login</Button>
            </Link>
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
