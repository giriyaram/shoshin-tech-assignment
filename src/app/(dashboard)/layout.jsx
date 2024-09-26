import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className="h-screen flex">
    {/* LEFT */}
    <div className="w-[0%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-[#fbfbfa] lg:p-8">
      <Link
        href="/"
        className="flex items-center justify-center lg:justify-start gap-2"
      >
        <Image src="/logo.png" alt="logo" width={150} height={40} className='hidden lg:flex' />
        <Image src="/logo-small.png" alt="logo" width={30} height={30} className='lg:hidden pt-4' />
      </Link>
      <Menu />
    </div>
    {/* RIGHT */}
    <div className="w-[100%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-white overflow-scroll flex flex-col">
      <Navbar />
      {children}
    </div>
  </div>
  )
}

export default DashboardLayout