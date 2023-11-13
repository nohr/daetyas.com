import Link from "next/link";

const Footer = () => {
  return (
    <footer className="!h-[36px] ">
      <Link
        href="mailto:hello@daetyas.com"
        className="flex border-y-gray border-x-[0px] border items-center justify-center text-xl hover:bg-green hover:text-slate w-full hover:border-green duration-100 ease-in-out"
      >
        hello@daetyas.com
      </Link>
    </footer>
  );
};

export default Footer;
