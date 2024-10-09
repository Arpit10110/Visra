import Link from "next/link"
const Footer = () => {
  return (
   <>
   <div className="bg-black  p-[2rem] flex text-gray-200  below-sm:flex-col below-sm:gap-[2rem] below-sm:p-[1rem] justify-between " >
      <div className="text-[1.1rem] flex flex-col gap-[1rem] " >
      <h1 className="text-[1.5rem] font-semibold" >Visra Enterprises</h1>
      <div className="flex flex-col gap-[0.6rem]" >
    <a href="tel:+918700418118">+918700418118</a>
    <a href="mailto:digitalidentity.dsc@gmail.com">digitalidentity.dsc@gmail.com</a>
    <a href="https://maps.app.goo.gl/XhXTokCUH3nSqpBv9">A - 111, Street Number - 3, West Vinod Nagar, Delhi - 110092</a>
      </div>
      </div>

      <div className="w-[60%] flex flex-col gap-[2rem] items-center below-sm:w-[100%] "  >


        <div className="flex gap-[5rem] justify-between w-[70%] flex-wrap below-sm:w-full below-sm:gap-[0rem] ">

          <div className="flex flex-col gap-[1rem]" >
              <h2 className="text-primary-blue font-semibold text-[1.3rem]" >Digital Signature Certificate</h2>
              <Link href={"/buy-certificate"} >Certificates</Link>
              <Link href={"/become-a-partner"}>Become a Partner</Link>
              <Link href={"/buy-certificate"}>Buy Certificate Page</Link>
              <Link href={"/doucment-signer"} >Digital Signature Application Form</Link>
          </div>


          <div className="flex flex-col gap-[1rem]">
              <h2 className="text-primary-blue font-semibold text-[1.3rem]" >Important Links</h2>
              <Link href={"/income-tax-efiling"} >Income Tax EFiling</Link>
              <Link href={"/e-tendering"}>E-Tendering</Link>
              <Link href={"/DGFT"}>DGFT(IET)</Link>
              <Link href={"/foreign-dsc"} >Foreign National DSC</Link>
              <Link href={"/IRCTC"} >IRCTC (e-Ticketing)</Link>
              <Link href={"/Digital-Signature-ICEGATE"} >Digital Signature ICEGATE</Link>
          </div>
          
        </div>


          <h2 className=" w-[80%] text-[1.1rem] below-sm:w-full " >Copyright © www.visra.com all rights are reserved!!!</h2>
      </div>


   </div>
   </>
  )
}

export default Footer
