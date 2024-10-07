import  Topbanner from "@/assets/Top-banner.jpg"
import Image from "next/image";
import Link from "next/link";
const Section1 = () => {
  return (
   <>
    <div className="flex justify-between pr-8 pl-8 items-center below-sm:pr-0 below-sm:pl-5  below-sm:flex-col below-sm:mt-[4rem] below-sm:gap-[3rem] ">
        <div className="w-[50%] flex flex-col gap-5 below-sm:w-[100%] below-sm:gap-[1rem] ">
            <h2 className="text-[2.5rem] font-semibold below-sm:text-[2rem] " >Get Your Digital Signature Today</h2>
            <p className="w-[87%] text-xl below-sm:w-[95%] ">At Visra Enterprises, we provide a range of Digital Signature solutions, from Paperless to Paper-based. Our services ensure secure, efficient, and legally valid transactions for all your digital documentation needs.</p>
            <Link className="max-w-fit p-4 bg-primary-blue rounded-[1rem] text-white font-semibold text-[1.1rem] hover:scale-[1.01] transition-all " href="/buy-certificate" >Apply for Digital Signature Now</Link>
        </div>
        <div className="w-[50%] below-sm:w-[95%] ">
            <Image className="w-full" src={Topbanner} alt="img" />
        </div>
    </div>
   </>
  )
}

export default Section1