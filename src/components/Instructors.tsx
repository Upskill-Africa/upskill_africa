import React from 'react'
import Avatar from "@/Images/Avatar.svg"
import Image from 'next/image'
import Twitter from "@/Images/twitter.svg"
import LinkedIn from "@/Images/linkedin.svg"
const Instructors = () => {
    const instructors = [
        {
            tutor: Avatar,
            name: "Theresa Webb",
            role: "Application Support Analyst Lead",
            work: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
        },
        {
            tutor: Avatar,
            name: "Courtney Henry",
            role: "Director, Undergraduate Analytics and Planning",
            work: "Lead engineering teams at Figma, Pitch, and Protocol Labs."
        },
        {
            tutor: Avatar,
            name: "Albert Flores",
            role: "Career Educator",
            work: "Former PM for Linear, Lambda School, and On Deck."
        },
        {
            tutor: Avatar,
            name: "Marvin McKinney",
            role: "Co-op & Internships Program & Operations Manager",
            work: "Former frontend dev for Linear, Coinbase, and Postscript."
        },
    ]
  return (
    <section className='w-[90%] md:w-[95%] px-4 pt-[8rem] md:px-6 xl:px-8  mx-auto '>
        <aside>
            <div className='text-center pb-6'>
                <h1 className='text-2xl md:text-4xl font-[600] pb-4'>Meet the Instructors</h1>
                <p className='text-[#667085]'>On Ed-Circle, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.</p>
            </div>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {instructors.map((instructor,index)=>{
                    return (
                    <div  key={index} className='flex flex-col gap-4 items-center justify-between bg-[#F9FAFB] px-6 py-8 text-center rounded-md'>
                        <Image src={Avatar} alt="tutor-img"/>
                        <div className=''>
                            <h3 className='font-semibold text-[1.1rem]'>{instructor.name}</h3>
                            <p>{instructor.role}</p>
                        </div>
                        <p className='text-[#667085]'>{instructor.work}</p>
                        <div className='flex gap-2'>
                            <Image src={Twitter} alt="twitter-img" />
                            <Image src={LinkedIn} alt="linked-img" />
                        </div>
                    </div>
                    )
                })}
            </div>
        </aside>
        <aside className='flex flex-col justify-center items-center gap-12 text-center pt-[8rem]'>
            <h2 className='font-[800]'>Testimonials.</h2>
            <div className='flex flex-col gap-8'>
                <p className='text-2xl md:text-4xl leading-relaxed md:leading-relaxed tracking-tight'>Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.</p>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <Image src={Avatar} alt="reviewer"  />
                    <div>
                        <p className='font-[500] text-lg'>Jacob Jones</p>
                        <p className='text-[#667085]'>Student, National University</p>
                    </div>
                </div>
            </div>
        </aside>
    </section>
  )
}

export default Instructors