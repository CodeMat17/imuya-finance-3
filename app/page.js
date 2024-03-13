import ThemeToggleButton from "@/components/ThemeToggleButton";
import { Button } from "@/components/ui/button";
import { Rubik_Marker_Hatch } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const rmh = Rubik_Marker_Hatch({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className='h-screen px-4'>
      <div className='flex justify-end p-4'>
        <ThemeToggleButton />
      </div>
      <div className='py-12 md:py-20 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-20'>
        <div className='w-full max-w-xl flex flex-col items-center justify-center text-center'>
          <div className={rmh.className}>
            {" "}
            <h1 className='text-4xl lg:text-5xl font-semibold'>
              This is the official IMUYA Finance Portal
            </h1>
          </div>

          <h3 className='mb-3 text-lg text-gray-400'>
            The online finance database
          </h3>
          <div className='pt-3'>
            <Button asChild>
              <Link href='/dashboard/monthly-dues'> View register</Link>
            </Button>
          </div>
        </div>
        <div className='relative w-[300px] aspect-square rounded-full shadow-lg '>
          <Image priority fill alt='logo' src='/logo.webp' />
        </div>
      </div>
      <div className='md:mt-12 mb-6 md:mb-0 w-full flex flex-col justify-center items-center'>
        <p className='font-semibold'>ACCOUNT DETAIL</p>
        <div className='mt-1 text-xs text-gray-600  dark:text-gray-400 flex gap-5'>
          <p>Account No: 1234567890</p>
          <p>Accout Name: Mbah Chukwuma</p>
          <p>Bank: FirstBank</p>
        </div>
      </div>
    </main>
  );
}
