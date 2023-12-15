import React from 'react'
import Course from "@/Images/blog2.png"
import Image from 'next/image'

const Blogs = () => {
  return (
    <section className='w-[90%] md:w-[95%] px-4 md:px-6 xl:px-8 pt-[9rem] pb-[7rem] mx-auto '>
      <h1 className='font-semibold text-2xl pb-8'>Our recent blogs</h1>
      <main className='flex flex-col lg:grid grid-cols-2 gap-6'>
        <section className='flex flex-col gap-6 lg:gap-4 justify-between'>
          <div className='sm:grid grid-cols-2 gap-4 justify-between lg:h-[50%]'>
            <Image src={Course} alt="blog-img" className='w-full md:h-[13rem] lg:h-full  object-cover'/>
            <div className='flex flex-col justify-between'>
              <h1>November 16, 2014</h1>
              <p>Three Pillars of User Delight</p>
              <p className='text-[#667085]'>Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...</p>
              <div className='flex'>
                <div>Research</div>
                <div>UI UX</div>
              </div>
            </div>
          </div>
          <div className='sm:grid grid-cols-2 gap-4 justify-between lg:h-[50%]'>
            <Image src={Course} alt="blog-img" className='w-full md:h-[13rem] lg:h-full object-cover'/>
            <div className='flex flex-col justify-between'>
              <h1>November 16, 2014</h1>
              <p>Three Pillars of User Delight</p>
              <p className='text-[#667085]'>Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...</p>
              <div>
                <div>Research</div>
                <div>UI UX</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='sm:grid grid-cols-2 gap-4 justify-between lg:flex lg:flex-col h-full'>
            <Image src={Course} alt="blog-img" className='w-full md:h-[13rem] object-covers'/>
            <div className='flex flex-col justify-between'>
              <h1>November 16, 2014</h1>
              <p>Three Pillars of User Delight</p>
              <p className='text-[#667085]'>Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...</p>
              <div>
                <div>Research</div>
                <div>UI UX</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  )
}

export default Blogs



{/* <section className='w-[90%] md:w-[95%] px-4 md:px-6 xl:px-8 pt-[3rem] mx-auto'>
        <h1>Our recent blogs</h1>
        <div className='flex flex-col lg:grid grid-cols-2 gap-4'>
          <div className='flex flex-col justify-between gap-6'>
            <div className='sm:grid grid-cols-2 gap-4 justify-between sm:bg-red-500 h-[50%]'>
                <div className='w-[100%] h-full bg-blue-600 flex justify-center items-center'>
                    <Image src={Course} alt="blog-img" className='w-full block  '/>
                </div>
                <div className='flex flex-col justify-between'>
                  <h1>November 16, 2014</h1>
                  <p>Three Pillars of User Delight</p>
                  <p className='text-[#667085]'>Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...</p>
                  <div>
                    <div>Research</div>
                    <div>UI UX</div>
                  </div>
                </div>
            </div>
            <div className='sm:grid grid-cols-2 gap-4 justify-between  bg-red-500 h-[50%]'> */}
              {/* <div className='w-full'> */}
                  // <Image src={Course} alt="blog-img" className='w-full h-full'/>
              {/* </div> */}
          //     <div className='flex flex-col justify-between '>
          //       <h1>November 16, 2014</h1>
          //       <p>Three Pillars of User Delight</p>
          //       <p className='text-[#667085]'>Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...</p>
          //       <div>
          //         <div>Research</div>
          //         <div>UI UX</div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          // <div>
          //   <div className='sm:grid sm:grid-cols-2 gap-4 lg:flex lg:flex-col h-full  bg-gray-800'>
              {/* <div className='w-full'> */}
                  // <Image src={Course} alt="blog-img" className='w-full'/>
              {/* </div> */}
    //           <div>
    //             <h1>November 16, 2014</h1>
    //             <p>Three Pillars of User Delight</p>
    //             <p className='text-[#667085]'>Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...</p>
    //             <div>
    //               <div>Research</div>
    //               <div>UI UX</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    // </section>