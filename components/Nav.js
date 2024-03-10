"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBridge } from "react-icons/fa6";
import { IoHammerOutline } from "react-icons/io5";
import { MdMenuBook, MdOutlineCalendarMonth } from "react-icons/md";
import { TbApps } from "react-icons/tb";
import ThemeToggleButton from "./ThemeToggleButton";

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className='fixed hidden sm:block m-4'>
      <div className='hidden pl-5 mt-5 sticky top-0 z-50 md:flex items-center justify-between'>
        <div className='relative w-12 h-12'>
          <Image alt='logo' fill priority src='/logo.webp' />
        </div>
        <ThemeToggleButton />
      </div>
      <div className='flex min-h-screen items-center justify-center'>
        <div className='flex flex-col gap-5 py-10 rounded-xl shadow-lg bg-gray-100 dark:bg-gray-800'>
          <Link
            href='/'
            // onClick={() => setIsOpen(false)}
            className={`px-4 py-2 ${
              pathname === "/" ? "bg-white dark:bg-gray-950" : ""
            } hover:bg-gray-100 dark:hover:bg-gray-700  tracking-wider  flex gap-3`}>
            <TbApps className='w-6 h-6' />{" "}
            <span className='hidden md:flex'>Home</span>
          </Link>
          <Link
            href='/dashboard/monthly-dues'
            // onClick={() => setIsOpen(false)}
            className={`px-4 py-2  ${
              pathname === "/dashboard/monthly-dues"
                ? "bg-white dark:bg-gray-950"
                : ""
            } hover:bg-gray-100 dark:hover:bg-gray-700  tracking-wider flex gap-3`}>
            <MdOutlineCalendarMonth className='w-6 h-6' />{" "}
            <span className='hidden md:flex'>Monthly Dues</span>
          </Link>
          <Link
            href='/dashboard/constitution'
            // onClick={() => setIsOpen(false)}
            className={`px-4 py-2 ${
              pathname === "/dashboard/constitution"
                ? "bg-white dark:bg-gray-950"
                : ""
            } hover:bg-gray-100 dark:hover:bg-gray-700 tracking-wider flex gap-3`}>
            <MdMenuBook className='w-6 h-6' />{" "}
            <span className='hidden md:flex'>Constitution</span>
          </Link>
          <Link
            href='/dashboard/bridge-repair-donations'
            // onClick={() => setIsOpen(false)}
            className={`px-4 py-2 ${
              pathname === "/dashboard/bridge-repair-donations"
                ? "bg-white dark:bg-gray-950"
                : ""
            } hover:bg-gray-100 dark:hover:bg-gray-700 tracking-wider flex gap-3`}>
            <FaBridge className='w-6 h-6' />
            <span className='hidden md:flex'>Bridge Repairs</span>
          </Link>
          <Link
            href='/dashboard/aguobia-donations'
            // onClick={() => setIsOpen(false)}
            className={`px-4 py-2 ${
              pathname === "/dashboard/aguobia-donations"
                ? "bg-white dark:bg-gray-950"
                : ""
            } hover:bg-gray-100 dark:hover:bg-gray-700 tracking-wider flex gap-3`}>
            <IoHammerOutline className='w-6 h-6' />
            <span className='hidden md:flex'>Aguobia Project</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
