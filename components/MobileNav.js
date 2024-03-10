"use client";

import { motion } from "framer-motion";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBridge } from "react-icons/fa6";
import { IoHammerOutline } from "react-icons/io5";
import { MdMenuBook, MdOutlineCalendarMonth } from "react-icons/md";
import { TbApps } from "react-icons/tb";

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sm:hidden relative'>
      <button
        onClick={toggleMenu}
        className=' focus:outline-none flex items-center'>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className='w-8 h-8  flex justify-center items-center'>
          {isOpen ? (
            <X className='text-red-600 text-2xl w-10 h-10 font-bold' />
          ) : (
            <AlignRight className='text-2xl w-[28px] h-[28px] font-bold' />
          )}
        </motion.div>
      </button>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`absolute top-12 right-0 bg-gray-300/90 dark:bg-gray-900/90 px-2 py-4 shadow-md  rounded-lg flex flex-col gap-4 ${
          isOpen ? "block" : "hidden"
        }`}>
        {/* Add your menu links here */}

        <Link
          href='/'
          onClick={() => setIsOpen(false)}
          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg tracking-wider text-lg font-semibold'>
          <TbApps className='w-6 h-6' />
        </Link>
        <Link
          href='/dashboard/monthly-dues'
          onClick={() => setIsOpen(false)}
          className={`block px-4 py-2 ${
            pathname === "/dashboard/monthly-dues" ? "dark:bg-gray-700" : ""
          } hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg tracking-wider text-lg font-semibold`}>
          <MdOutlineCalendarMonth className='w-6 h-6' />
        </Link>
        <Link
          href='/dashboard/constitution'
          onClick={() => setIsOpen(false)}
          className={`block px-4 py-2  ${
            pathname === "/dashboard/constitution" ? "dark:bg-gray-700" : ""
          } hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg tracking-wider text-lg font-semibold`}>
          <MdMenuBook className='w-6 h-6' />
        </Link>
        <Link
          href='/dashboard/bridge-repair-donations'
          onClick={() => setIsOpen(false)}
          className={`block px-4 py-2  ${
            pathname === "/dashboard/bridge-repair-donations"
              ? "dark:bg-gray-700"
              : ""
          } hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg tracking-wider text-lg font-semibold`}>
          <FaBridge className='w-6 h-6' />
        </Link>
        <Link
          href='/dashboard/aguobia-donations'
          onClick={() => setIsOpen(false)}
          className={`block px-4 py-2  ${
            pathname === "/dashboard/aguobia-donations"
              ? "dark:bg-gray-700"
              : ""
          } hover:bg-gray-100 dark:hover:bg-gray-700  rounded-lg tracking-wider text-lg font-semibold`}>
          <IoHammerOutline className='w-6 h-6' />
        </Link>
        {/* Add more links as needed */}
      </motion.div>
    </div>
  );
};

export default MobileNav;
