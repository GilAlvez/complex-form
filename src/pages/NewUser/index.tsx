import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const NewUser = () => {
  const { state: user } = useContext(UserContext);
  const active = "md:mx-4 border-b-2 border-b-sky-300";
  const notActive = "md:mx-4 border-b-2 hover:border-b-sky-600";

  return (
    <>
      <section className="section h-screen flex flex-col md:flex-row gap-12">
        <div className="w-full md:min-w-[35rem] xl:min-w-[55rem] flex flex-col gap-12 items-center">
          <Breadcrumb className="text-sm md:text-lg" separator={<ChevronRightIcon />}>
            <BreadcrumbItem>
              <NavLink
                to="/new-user/basic-info"
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                Basic Info
              </NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <NavLink
                to="/new-user/address"
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                Address
              </NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <NavLink
                to="/new-user/profile-config"
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                Profile Config
              </NavLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <NavLink
                to="/new-user/user-info"
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                User Info
              </NavLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Outlet />
        </div>
        <pre className="md:mt-20 text-sm">{JSON.stringify(user, null, 2)}</pre>
      </section>
    </>
  );
};

export default NewUser;
