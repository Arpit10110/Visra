import React from 'react'
import Becomepartner from "@/assets/becomepartner.png";
import benefitsImg from "@/assets/benefitsImg.jpg";
import whyus from "@/assets/whyus.jpg";
import joinus from "@/assets/joinus.png";
import Image from "next/image";
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import Link from 'next/link';
import "@/Style/Buycertificate.css";
// icons
import HubIcon from '@mui/icons-material/Hub';
import AssistantIcon from '@mui/icons-material/Assistant';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
const page = () => {
  return (
    <>
    <Navbar/>
    <div>
        <div>
            <Image src={Becomepartner} className="w-full object-contain"  />
        </div>
        <div>
            <h1 className='text-[2rem] font-semibold mt-[2rem] text-center text-blue-500   ' >Visra DSC Partner/Reseller Program</h1>
            <div className=' m-auto mt-[2rem] text-[1.2rem] flex flex-col gap-[1rem] w-[95%] justify-center   ' >
                <p className='font-semibold'>We VISRA ENTERPRISES is a leading and renowned brand in the market of Digital Signature Certificate & PKI solution. Join our Visra DSC Partner/ Reseller program today and Start Your Own Digital Signature Certificate Business & Issue DSC from Your Office. We provide Digital Signature certificates for various purposes such as e-Tendering, e-Procurement, e-Ticketing, e-Filing of ITR, ROC, MCA, DGFT, PF, IEC, Custom & Excise, ESI, Net-Banking, and much more.Become DSC Partner/ Reseller with us.</p>
                <p className='font-semibold'>Our Clients include Corporates, Companies, Individuals, MNCs, SMEs, CAs, CS, Advocates, etc.</p>
                <p className='font-semibold'>We are a Licensed Channel Controller with Capricorn CA to appoint Direct Sales Partners and related products sale in India.</p>
                <p className='font-semibold'> VISRA ENTERPRISES is one of the Controller of Certifying Authorities (CCA) appointed Certification Authority (CA).</p>
            </div>
        </div>
        <div className='mt-[4rem] mb-[2rem] flex justify-evenly flex-wrap below-sm:gap-[2rem] ' >
            <div className='w-[30%] flex  flex-col justify-center items-center p-[1rem] gap-[1rem] rounded-[1rem] bg-gray-200 below-sm:w-[95%]  ' >
                <div className='bg-white border-red-600 border-[2px] p-[0.5rem] rounded-[50%] flex   ' >
                    <HubIcon className='!text-[3rem] text-pink-500 ' />
                </div>
                <div className=' flex flex-col justify-center items-center ' >
                    <h1 className='font-bold text-blue-500 text-[1.5rem] ' > Join Us Today</h1>
                    <p className='text-center text-[1.3rem] ' >Start your digital signature certificate business zero investment plan</p>
                </div>
            </div>
            <div className='w-[30%] flex  flex-col justify-center items-center p-[1rem] gap-[1rem] rounded-[1rem] bg-gray-200 below-sm:w-[95%]  ' >
                <div className='bg-white border-red-600 border-[2px] p-[0.5rem] rounded-[50%] flex   ' >
                    <AssistantIcon className='!text-[3rem] text-pink-500 ' />
                </div>
                <div className=' flex flex-col justify-center items-center ' >
                    <h1 className='font-bold text-blue-500 text-[1.5rem] ' > Communicate</h1>
                    <p className='text-center text-[1.3rem] ' >We assure you to provide the best after-sales support in the industry.</p>
                </div>
            </div>
            <div className='w-[30%] flex  flex-col justify-center items-center p-[1rem] gap-[1rem] rounded-[1rem] bg-gray-200 below-sm:w-[95%]  ' >
                <div className='bg-white border-red-600 border-[2px] p-[0.5rem] rounded-[50%] flex   ' >
                    <CurrencyExchangeIcon className='!text-[3rem] text-pink-500 ' />
                </div>
                <div className=' flex flex-col justify-center items-center ' >
                    <h1 className='font-bold text-blue-500 text-[1.5rem] ' > CASH</h1>
                    <p className='text-center text-[1.3rem] ' >Our SINGLE DASHBOARD manage your client lifecycle win every deal</p>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap justify-around items-center mt-[5rem] below-sm:gap-[2rem] ' >
           <div className='w-[40%] rounded-[1rem] below-sm:w-[95%] ' >
                <Image src={benefitsImg} className="w-full  rounded-[1rem] object-cover " />
            </div>
            <div className='w-fit flex flex-col gap-[2rem] below-sm:w-[95%] '  >
                <h1 className='text-[1.7rem] font-semibold ' >👉Get Dsc at very low price</h1>
                <h1 className='text-[1.7rem] font-semibold ' >👉Additional Business Opportunity</h1>
                <h1 className='text-[1.7rem] font-semibold ' >👉Can charge any price from your client</h1>
                <h1 className='text-[1.7rem] font-semibold ' >👉No Investment</h1>
            </div>
           
        </div>
        <div className='flex justify-around flex-wrap items-center mt-[4rem] mb-[4rem] below-sm:flex-col-reverse   below-sm:gap-[2rem] below-sm:justify-center   ' >
            <div className='w-[50%] flex flex-col gap-[1rem] below-sm:w-[95%] ' >
                <h1 className='font-semibold text-[2rem]' >Join the Visra Enterprises Family</h1>
                <p>Become a valued partner/reseller and contribute to our mission of providing exceptional customer experiences for Digital Signature Certificates. Together, we can build strong, mutually beneficial relationships.</p>
                <h1 className='font-semibold text-[2rem]' >Elevate Your Business with Visra</h1>
                <p>Choose the Visra DSC Partner/Reseller program that aligns with your business goals. By joining our network, you'll gain access to innovative products and services, expert support, and a dedicated community of partners.</p>
            </div>
            <div className='w-[30%] below-sm:w-[80%] ' >
                <Image  className='w-full' src={joinus}/>
            </div>
        </div>
        <div className='flex justify-around flex-wrap items-center mt-[4rem] mb-[4rem] below-sm:flex-col   below-sm:gap-[2rem] below-sm:justify-center ' >
            <div className='w-[35%] below-sm:w-[90%] ' >
                    <Image  className='w-full' src={whyus}/>
                </div>
            <div className='w-[55%] flex flex-col gap-[1rem] below-sm:w-[95%]  ' >
                <h1 className='font-semibold text-[1.8rem]' >WHY BECOME OUR DSC SALES PARTNER/ RESELLER?</h1>
                <h2 className='text-[1.2rem] text-gray-600' >✨You have an additional business opportunity</h2>
                <h2 className='text-[1.2rem] text-gray-600' >✨No Investment.</h2>
                <h2 className='text-[1.2rem] text-gray-600' >✨Get the Digital Signature Certificate at a very low price.</h2>
                <h2 className='text-[1.2rem] text-gray-600' >✨You can charge any price from your client.</h2>
                <h2 className='text-[1.2rem] text-gray-600' >✨Issue DSC from your own office.</h2>
                <h2 className='text-[1.2rem] text-gray-600' >✨Fast Issuance.</h2>
                <h2 className='text-[1.2rem] text-gray-600' >✨Issuance of signature immediately on receipt of scan documents.</h2>
                <h2 className='text-[1.2rem] text-gray-600' >✨No burden of sending documents via courier every day.</h2>
                <h2 className='text-[1.2rem] text-gray-600' >✨Best after-sales Customer Support.</h2>
            </div>
        </div>
        <div className="buy-certicate-contactBox">
        <h1>Get In Touch With Us!</h1>
        <p>
          Click on the button given below and fill the form with the required
          details Our dedicated team of experts and specialists will get back to
          you within 24 hours!{" "}
        </p>
        <Link href="/contact">Contact Us</Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default page