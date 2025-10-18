import Theme from "@/components/navigation/navbar/Theme";
import Image from "next/image";
import Link from "next/link";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <div className="flex-between background-light900_dark200 fixed z-50 w-full gap-5  p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/favicon.ico" width={25} height={25} alt="logo"></Image>
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          <span>LiveOverFlow</span>
        </p>
      </Link>
      <p>Global Search</p>

      <div className="flex-between gap-5">
        <Theme />
        <MobileNavigation />
      </div>
    </div>
  );
};

export default Navbar;
