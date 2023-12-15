import React from 'react'
import Web from "@/Images/Frame 390.svg"
import Market from "@/Images/Frame 391.svg"
import Image from 'next/image'
import Course from "@/Images/Image.svg"
import Avatar from "@/Images/Avatar.svg"

const Services = () => {
    const service = [
        {
            name: "User Experience",
            content:"Lessons on design that cover the most recent developments.",
            icon: Web
        },
        {
            name: "Web Development",
            content:"Classes in development that cover the most recent advancements in web.",
            icon: Market
        },
        {
            name: "Marketing",
            content:"Marketing courses that cover the most recent marketing trends",
            icon: Market
        },
    ]
    const explore = [
        {
            image: Course,
            tutor: {
                avatar: Avatar,
                name: "Jane Cooper",
                students: 2001,
            },
            title: "Figma UI UX Design..",
            description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
            rating: 4.3
        },
        {
            image: Course,
            tutor: {
                avatar: Avatar,
                name: "Jane Cooper",
                students: 2001,
            },
            title: "Figma UI UX Design..",
            description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
            rating: 4.3
        },
        {
            image: Course,
            tutor: {
                avatar: Avatar,
                name: "Jane Cooper",
                students: 2001,
            },
            title: "Figma UI UX Design..",
            description: "Use Figma to get a job in UI Design, User Interface, User Experience design.",
            rating: 4.3
        }
    ]
  return (
    <section className='relative pt-[4rem]'>
        <div className='absolute h-[55%] w-[45%] bg-[#E8D59F] z-[-1] opacity-70 blur-[10rem]'></div>
        <div className='absolute right-0 h-[55%] w-[45%] bg-[#C6F8CC] z-[-1] opacity-70 blur-[10rem]'></div>
        <div className='w-[90%] md:w-[95%] px-4 md:px-6 xl:px-8 pt-[3rem] mx-auto flex flex-col gap-[4rem]'>
            <div>
                <div className='text-center font-[600]'>
                    <h3 className='text-primary text-xl md:text-2xl pb-4'>Our Services</h3>
                    <h1 className='text-2xl md:text-4xl max-w-[50rem] mx-auto'>Fostering a playful & engaging learning environment</h1>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 py-[3rem] '>
                    {service.map((service,index)=>{
                        return (
                            <div className='bg-primary text-white p-6 rounded-md  mx-auto sm:w-full grid gap-8' key={index} >
                                <div className='flex gap-2 items-center'>
                                    <Image src={service.icon} alt='icon'/>
                                    <h1>{service.name}</h1>
                                </div>
                                <p>{service.content}</p>
                                <p>Learn more</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='pt-[4rem]'>
                <div className='grid gap-4'>
                    <h3 className='text-primary'>Explore Programs</h3>
                    <h1 className='text-2xl md:text-4xl max-w-[50rem] font-[600]'>Our Most Popular Class</h1>
                    <p className='text-[#667085]'>Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
                </div>
                <div className='w-full grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 py-[3rem] '>
                    {explore.map((course,index)=>{
                        return (
                            <div className='bg-white p-6 rounded-md sm:w-[70%] mx-auto md:w-full  grid gap-4 shadow-lg' key={index} >
                                <Image src={course.image} alt='course-img' className='w-full'/>
                                <div className='grid gap-4'>
                                    <p className='font-semibold'>Design</p>
                                    <h2 className='font-semibold text-xl'>{course.title}</h2>
                                    <p className='text-[#667085]'>{course.description}</p>
                                    <div className='flex gap-2 text-sm'>
                                        <p className='text'>{course.rating}</p>
                                        <p className='text-[#667085]'>1800</p>
                                    </div>
                                    <section className='flex justify-between items-center'>
                                        <div className='flex items-center gap-2'>
                                            <Image src={course.tutor.avatar} alt="avatar"/>
                                            <div className='text-sm '>
                                                <p className='font-semibold'>{course.tutor.name}</p>
                                                <p className='text-[#667085]'>{course.tutor.students} Enrolled</p>
                                            </div>
                                        </div>
                                        <p className='font-semibold text-xl'>$1000</p>
                                    </section>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex justify-center items-center'>
                    <button className='px-4 mx-auto border border-gray-300 py-2 rounded-md'>Explore All Programs</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services