import Link from "next/link";

const Nav = () => {
  const routes = [
    {
      name: "photos",
      path: "/photos",
    },
    {
      name: "music",
      path: "/music",
    },
    {
      name: "words",
      path: "/words",
    },
    {
      name: "info",
      path: "/info",
    },
  ];
  return (
    <nav className="flex !h-[36px] justify-between items-center">
      <Link
        href="/"
        className="flex border-y-gray border-x-[0px] border items-center justify-center text-xl hover:bg-green hover:text-slate w-2/3 hover:border-green duration-100 ease-in-out"
      >
        daetyas
      </Link>
      <div className="flex w-1/3">
        {routes.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            className="flex w-1/3 items-center justify-center text-xl hover:bg-green hover:text-slate border-y-gray border-r-[0px] border hover:border-green duration-100 ease-in-out"
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
