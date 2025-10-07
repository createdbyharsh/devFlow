import React from "react";
import Image from "next/image";
import Link from "next/link";
import Theme from "@/components/navigation/navbar/Theme";

const Navbar = () => {
  return (
    <div className="flex-between background-light900_dark200 sticky z-50 w-full p-6 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/favicon.ico" width={25} height={25} alt="logo"></Image>
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          <span>LiveOverFlow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div>
        <Theme />
      </div>
    </div>
  );
};

export default Navbar;
