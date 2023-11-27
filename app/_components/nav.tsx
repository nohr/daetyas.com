
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
    <nav className="flex !h-[36px] z-50 justify-between items-center md:flex-row flex-col-reverse order-3 md:order-1">
      <Link
        href="/"
        className="flex h-full border-y-gray border-x-0 border-t-0 md:!border-t border items-center justify-center text-xl hover:bg-green hover:text-slate w-full md:w-1/3 min-[1250px]:w-2/3 hover:border-green duration-100 ease-in-out"
      >
        dae tyas
      </Link>
      <div className="flex h-full w-full md:w-2/3 min-[1250px]:w-1/3">
        {routes.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            className="flex w-1/4 min-w-fit px-1 items-center justify-center text-xl hover:bg-green hover:text-slate border-y-gray first-of-type:border-l-0 border-r-0 md:!border-l border hover:border-green duration-100 ease-in-out"
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
