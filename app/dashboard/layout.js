import HeaderNav from '../../components/HeaderNav';
import Nav from '../..//components/Nav';
import Image from 'next/image';
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className='w-full flex min-h-screen'>
    
      <Nav />
      <section className='sm:ml-16 md:ml-[280px] flex-grow md:rounded-3xl md:overflow-hidden transition-all transform duration-500'>
        <HeaderNav />
        <main>{children}</main>
      </section>
    </div>
  );
}

export default DashboardLayout