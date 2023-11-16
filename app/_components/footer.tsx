import Link from "next/link";

const Footer = () => {
  return (
    <footer className="!h-[36px] order-y-gray border-x-[0px] border hover:bg-green hover:text-slate hover:border-green duration-100 ease-in-out">
      <Link
        href="mailto:dae@daetyas.com"
        className="flex b items-center justify-center text-xl  w-full "
      >
        dae@daetyas.com
      </Link>
    </footer>
  );
};

export default Footer;
