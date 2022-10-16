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
          <Breadcrumb className="text-lg" separator={<ChevronRightIcon />}>
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
                to="/new-user/plan"
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                Plan
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
        <div className="scrollbar bg-gray-900 text-sky-200 shadow-xl shadow-black/60 p-3 rounded-xl text-sm w-max h-max overflow-visible md:mt-20 md:overflow-x-scroll md:min-w-[27rem]">
          <pre className="h-full">{JSON.stringify(user, null, 2)}</pre>
        </div>
      </section>
    </>
  );
};

export default NewUser;
