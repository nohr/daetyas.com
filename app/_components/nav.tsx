"use client"

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
    <nav className="flex !h-[36px] justify-between items-center">
      <Link
        href="/"
        className="flex h-full border-y-gray border-x-[0px] border items-center justify-center text-xl hover:bg-green hover:text-slate w-1/3 min-[1250px]:w-2/3 hover:border-green duration-100 ease-in-out"
      >
        daetyas
      </Link>
      <div className="flex h-full w-2/3 min-[1250px]:w-1/3">
        {routes.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            className="flex w-1/4 items-center justify-center text-xl hover:bg-green hover:text-slate border-y-gray border-r-[0px] border hover:border-green duration-100 ease-in-out"
          >
            {pathname.includes(name) ? ">"
              : ""}{name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
