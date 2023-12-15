import React from 'react'
import Image from "next/image"
import Logo from "@/Images/logo.svg"
import Link from 'next/link'
const Header = () => {
  return (
    <header className='w-full px-4 md:px-8 pt-2'>
        <nav className='flex justify-between items-center '>
            <div className=''>
                <Image src={Logo} alt="Logo" />
            </div>
            <div className='border border-gray-400 p-2  lg:flex items-center justify-between rounded-md hidden lg:w-[25%] xl:w-[30%]'>
                <p>s</p>
                <input type="text" placeholder='Want to learn?' className='w-[90%] outline-none'/>
            </div>
            <div  className='flex items-center justify-between gap-3'>
                <button className='bg-primary p-2 text-white rounded-md'>Explore</button>
                <button className='lg:hidden'>ham</button>
                <div className='hidden lg:flex gap-4 lg:gap-4'>
                    <Link href={"#"} className='text-[#101828]'>Home</Link>
                    <Link href={"#"} className='text-[#101828]'>Features</Link>
                    <Link href={"#"} className='text-[#101828]'>Courses</Link>
                    <Link href={"#"} className='text-[#101828]'>Bootcamps</Link>
                    <Link href={"#"} className='text-[#101828]'>Tutors</Link>
                </div>
                <div className='flex gap-3'> 
                    <button className='p-2'>Log in</button>
                    <button className='bg-primary text-white p-2 rounded-md'>Sign up</button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header