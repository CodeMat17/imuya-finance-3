"use client";

import Image from "next/image";
import MobileNav from "./MobileNav";
import ThemeToggleButton from "./ThemeToggleButton";

const HeaderNav = () => {
  return (
    <div className='sticky top-0 z-50 p-4 bg-white dark:bg-gray-950 md:hidden'>
      <div className='flex items-center justify-between '>
        <div className="relative w-12 h-12">
          <Image alt='logo' fill priority src='/logo.webp' />
        </div>
        <div className='flex items-center gap-6'>
          <ThemeToggleButton />
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
