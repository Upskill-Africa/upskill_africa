import React from 'react'
import Image from 'next/image'
import BriefCase from "@/Images/Briefcase.png"
import Girl from "@/Images/Mask.svg"
import Collab from "@/Images/Vector.svg"
import Usertest from "@/Images/UserTest.svg"
import Magicleap from "@/Images/Vector.png"
const Hero = () => {
  return (
    <section className='w-[90%] md:w-full mx-auto px-4 md:px-8 pt-[3rem] text-center lg:text-start relative'>
        <div className='md:flex justify-between gap-[5rem]'>
            <aside className='font-400 grid gap-[2rem] place-items-center lg:place-items-start lg:w-[50%]'>
                <h1 className='capitalize text-primary font-extrabold text-[3rem] md:text-[4.5rem] leading-snug'>up your <span className='text-[#FFB612]'>skills to advance</span> your career path</h1>
                <p className='text-[#667085]'>Provides you with the latest online learning system and material that help your knowledge growing.</p>
                <button className='bg-primary text-white px-[3.5rem] py-[.8rem] w-fit rounded-md'>Enroll Now</button>
                <div className='flex w-full justify-between text-sm mt-6'>
                    <div className='flex gap-2 items-center'>
                        <Image src={BriefCase} alt='briefcase' className='w-4 h-4'/>
                        <p>Public Speaking</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={BriefCase} alt='briefcase' className='w-4 h-4'/>
                        <p>Career-Oriented</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={BriefCase} alt='briefcase' className='w-4 h-4'/>
                        <p>Public Speaking</p>
                    </div>
                </div>
            </aside>
            <aside className='hidden lg:flex justify-center items-center relative'>
                <div className='w-full h-full bg-[#C6F8CC] absolute z-[-10] blur-[3rem]'></div>
                <div className='relative md:h-[20rem] w-[20rem] lg:h-[23rem] lg:w-[25rem] grid place-items-center'>
                    <div className='absolute md:h-[19rem] w-[19rem] lg:h-[22rem] lg:w-[22rem] bg-primary z-[-1] rounded-full '></div>
                    <div  className='h-[23rem] w-[25rem]'>
                        <Image src={Girl} alt="Girl" className='h-full w-full'/>
                    </div>
                </div>
            </aside>
        </div>
        <div className='flex justify-between items-center py-[4rem]'>
            <div>
                <p>250+</p>
                <p>Collaborations</p>
            </div>
            <Image src={Collab} alt='collaboration' className='h-[2rem] w-[15%]'/>
            <Image src={Usertest} alt='collaboration' className='h-[2rem] w-[15%]'/>
            <Image src={Collab} alt='collaboration' className='h-[2rem] w-[15%]'/>
            <Image src={Magicleap} alt='collaboration' className='h-[2rem] w-[15%]'/>
        </div>
    </section>
  )
}

export default Hero