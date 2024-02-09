import Image from "next/image"
import Logo from "@/Images/logo.svg"
import Twitter from "@/Images/twitter.svg"
const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-10">
       <section className="grid gap-6 w-[90%] md:w-[95%] px-4 md:px-6 xl:px-8 py-[3rem] mx-auto ">
        <div className="grid gap-6 md:flex justify-between">
            <div className="lg:w-[35%]">
                <Image src={Logo} alt="logo-img"/>
                <p>Top learning experiences that create more talent in the world.</p>
            </div>
            <section className="grid gap-6 md:flex md:gap-6 lg:gap-16 lg:w-[57%] xl:w-[45%]">
                <aside className="flex gap-12 md:gap-6 lg:gap-16 leading-loose">
                    <div className="">
                        <h4>Product</h4>
                        <p>Overview</p>
                        <p>Features</p>
                        <p>Solutions</p>
                        <p>Tutorials</p>
                        <p>Pricing</p>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <p>About Us</p>
                        <p>Careers</p>
                        <div className="flex gap-2">
                            <p>Press</p>
                            <button>new</button>
                        </div>
                        <p>News</p>
                    </div>
                </aside>
                <aside className="flex gap-12 md:gap-6 lg:gap-16 leading-loose">
                    <div>
                        <h4>Product</h4>
                        <p>Overview</p>
                        <p>Features</p>
                        <p>Solutions</p>
                        <p>Tutorials</p>
                        <p>Pricing</p>
                    </div>
                    <div>
                        <h4>Product</h4>
                        <p>Overview</p>
                        <p>Features</p>
                        <p>Solutions</p>
                        <p>Tutorials</p>
                        <p>Pricing</p>
                    </div>
                </aside>
            </section>
        </div>
        <div className="flex flex-col gap-3 pt-[5rem] sm:flex-row sm:justify-between sm:items-center">
            <p>© 2023 Upskill Africa. All rights reserved.</p>
            <div className="flex ">
                <Image src={Twitter} alt="social-icon"/>
                <Image src={Twitter} alt="social-icon"/>
                <Image src={Twitter} alt="social-icon"/>
                <Image src={Twitter} alt="social-icon"/>
                <Image src={Twitter} alt="social-icon"/>
            </div>
        </div>
       </section> 
    </footer>
  )
}

export default Footer