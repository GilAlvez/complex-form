import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

const NewUser = () => {
  const active = "md:mx-4 border-b-2 border-b-sky-400";
  const notActive = "md:mx-4 border-b-2 hover:border-b-sky-600";

  return (
    <>
      <section className="h-screen flex flex-col items-center gap-24 section">
        <header>
          <Breadcrumb
            className="text-sm md:text-lg"
            separator={<ChevronRightIcon />}
          >
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
        </header>

        <Outlet />
      </section>
    </>
  );
};

export default NewUser;
