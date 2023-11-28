"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const routes = [
    {
      name: "projects",
      path: "/projects",
    },
    {
      name: "words",
      path: "/words",
    },
    {
      name: "exhibitions",
      path: "/exhibitions",
    },
    {
      name: "info",
      path: "/info",
    },
    // {
    //   name: "studio",
    //   path: "/studio",
    // },
  ];
  const pathname = usePathname();

  return (
    <nav className="z-50 order-3 flex flex-col-reverse items-center justify-between md:order-1 md:!h-[36px] md:flex-row">
      <Link
        href="/"
        className="flex h-full w-full items-center justify-center border border-x-0 border-t-0 border-y-gray text-xl duration-100 ease-in-out hover:border-green hover:bg-green hover:text-slate md:w-1/3 md:!border-t min-[1250px]:w-2/3"
      >
        dae tyas
      </Link>
      <div className="flex h-full w-full md:w-2/3 min-[1250px]:w-1/3">
        {routes.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            className="flex w-1/4 min-w-fit items-center justify-center border border-r-0 border-y-gray px-1 text-xl duration-100 ease-in-out first-of-type:border-l-0 hover:border-green hover:bg-green hover:text-slate md:!border-l"
          >
            {pathname.includes(name) ? ">" : ""}
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
