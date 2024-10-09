import section4Img from "@/assets/section4-Img.jpg"
import Image from "next/image"
const Section4 = () => {
  return (
   <>   
        <div className="flex justify-between pr-[2rem] pl-[2rem] items-center pb-[5rem] below-sm:flex-col below-sm:gap-[4rem] " >
            <div className="w-[40%] below-sm:w-[90%]" >
                <Image className="w-full" src={section4Img} alt="sec4"  />
            </div>
            <div className="w-[40%] flex flex-col gap-[0.7rem] below-sm:w-[100%] text-[1.3rem] " >
                <h2 className="text-[2.5rem] font-semibold below-sm:text-[2rem] " >USES OF DIGITAL SIGNATURE</h2>
                <li className=" list-none " >⭐Income Tax e-filing</li>
                <li className=" list-none " >⭐MCA e-Filing</li>
                <li className=" list-none " >⭐e-Procurement/e-Tendering</li>
                <li className=" list-none " >⭐IRCTC (e-Ticketing)</li>
                <li className=" list-none " >⭐DGFT (IET)</li>
                <li className=" list-none " >⭐Employee Provident Fund (EPF)</li>
                <li className=" list-none " >⭐Foreign National DSC</li>
                <li className=" list-none " >⭐Digital Signature for GST</li>
                <li className=" list-none " >⭐Intellectual Property (IPR)</li>
                <li className=" list-none " >⭐Digital Signature ICEGATE</li>
            </div>
        </div>
   </>
  )
}

export default Section4