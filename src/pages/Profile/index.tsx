import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProfileMenu from "../../components/Surface/Dropdown/profileMenu";

const Profile = () => {
  return (
    <section className="md:w-3/5 flex flex-col gap-6 items-center section">
      <main className="min-w-[24rem] flex flex-col gap-6 items-center border border-sky-400/20 bg-sky-300/5 rounded-lg p-12">
        <ProfileMenu />
        <figure>
          <img
            className="rounded-full h-32 aspect-square object-cover"
            src="https://i.postimg.cc/ZKC1ykyk/Whats-App-Image-2022-05-28-at-16-38-52.jpg"
          ></img>
        </figure>
        <div className="text-center">
          <h1 className="text-2xl select-none md:whitespace-nowrap">
            Gildson Alves
          </h1>
          <h2 className="text-sm text-gray-500">gildson_af@outlook.com</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link to={"/"}>
            <Button color="red.600" className="w-full">
              Logout
            </Button>
          </Link>
          <Link to={"/new-user/basic-info"}>
            <Button color="skyblue" className="w-full">
              New User
            </Button>
          </Link>
        </div>
      </main>

      <section className="grid grid-cols-2 gap-6 p-12 ">
        <div className="col-span-2">
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            debitis unde inventore alias maxime, provident rerum fuga ipsam
            beatae necessitatibus veniam aperiam in labore, aliquid ex
            voluptatibus ea! Quisquam, esse!
          </p>
        </div>
        <div>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            debitis unde inventore alias maxime, provident rerum fuga ipsam
            beatae necessitatibus veniam aperiam in labore, aliquid ex
            voluptatibus ea! Quisquam, esse!
          </p>
        </div>
        <div>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            debitis unde inventore alias maxime, provident rerum fuga ipsam
            beatae necessitatibus veniam aperiam in labore, aliquid ex
            voluptatibus ea! Quisquam, esse!
          </p>
        </div>
        <div>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            debitis unde inventore alias maxime, provident rerum fuga ipsam
            beatae necessitatibus veniam aperiam in labore, aliquid ex
            voluptatibus ea! Quisquam, esse!
          </p>
        </div>
        <div>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            debitis unde inventore alias maxime, provident rerum fuga ipsam
            beatae necessitatibus veniam aperiam in labore, aliquid ex
            voluptatibus ea! Quisquam, esse!
          </p>
        </div>
      </section>
    </section>
  );
};

export default Profile;
