import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'
import "@/Style/DocumentSigner.css"
import  DocumentSignerImg2 from "@/assets/DocumentSignerImg2.jpg"
import Image from "next/image";
import Footer from '@/Components/Footer/Footer';
import section4Img from "@/assets/section4-Img.jpg"
import Link from 'next/link';
const page = () => {
  return (
   <>
   <Navbar/>
   <div>
        <div className='Doctopbanner w-full h-[50vh] flex items-end below-sm:h-[25vh] ' >
                <div className=' w-[38%] flex justify-center items-center flex-col gap-[0.5rem] text-[1.5rem] text-white below-sm:w-[100%] below-sm:text-[1.2rem]  ' >
                    <h1 className='text-center font-semibold'>Document Signer Certificate</h1>
                    <p className='text-center font-semibold' >We provide Bulk Document Signer for HSM and USB  to sign all types of documents (pdf, docs, etc)</p>
                </div>
        </div>
        <div className=' pt-[4rem] pb-[4rem] below-sm:pt-[2rem] ' >
            <h1 className='text-center font-semibold text-[3rem] mt-[1rem] mb-[4rem]  below-sm:text-[1.8rem] below-sm:mb-[2rem] text-[#108DC6] ' >What is Document Signer Certificate?</h1>
            <div className='flex justify-evenly items-center flex-wrap below-sm:gap-[2rem]  ' >
                <div className='flex gap-[1rem] flex-col text-gray-600 w-[40%] below-sm:w-[90%] ' >
                    <p>
                        Document Signer Certificate enables automatic bulk digital signing of documents by organizations to integrating them into their software application. It is issued in the name of the Organization and is available in Class 2 and Class 3.
                    </p>
                    <p>
                    The ‘Organizational Document Signer Certificate’ is issued to organizational software applications for operating automatically. It authenticates documents/information associated with the organization by using Digital Signature applied to the documents/Information. They contain an additional Object Identifier (OID) in “Certificate Policies” of the certificate as (2.16.356.100.10.1) to limits the usage of this certificate.
                    </p>
                    <p>
                    The Organizational Document Signer Certificates is different from a Digital Signature Certificate (DSC). It is issued to an Organization for use of a person. It’s official capacity bearing the name of the department or subdivision of the organization the person belongs to.
                    </p>
                    <p>
                    Therefore, it may be noted that it is not a replacement for the signature of the authorized signatory of the organization.
                    </p>
                </div>
                <div className='w-[40%] below-sm:w-[90%]' >
                    <Image className='w-full object-cover rounded-[1rem]  ' src={DocumentSignerImg2} alt="" />
                </div>
            </div>
        </div>
        <div className='flex justify-evenly flex-wrap items-center ' >
            <div className='w-[40%] below-sm:w-[90%]' >
                <Image className='w-full' src={section4Img} />
            </div>
            <div className='bg-gray-50 text-[1.2rem] p-[1rem] flex flex-col gap-[1rem] w-[50%] below-sm:w-[90%] ' >
                <p>👉Bulk signing of invoices, claims, agreements, GST, contract notes, offer letters etc.</p>
                <p>👉Online electronically digital signing of insurance policies on servers.</p>
                <p>👉Signing of multiple proposals for vendor onboarding.</p>
                <p>👉Automated Signing of recurring bills like postpaid mobile bills of telecom companies.</p>
                <p>👉Online verification of PAN by authorized entities such as banks, insurance companies, department of commercial taxes etc.</p>
            </div>
        </div>
        <div className='pt-[4rem] pb-[4rem] ' >
            <h1 className='text-[3rem] text-center font-semibold below-sm:text-[2rem] ' >What Visra Enterprises provides</h1>
            <div className='flex justify-evenly flex-wrap pt-[4rem] below-sm:gap-[1.5rem]  ' >
                <div className='flex flex-col gap-[1rem] bg-gray-100 p-[2rem] w-[30%] rounded-[1rem] items-center cursor-pointer hover:scale-[1.02] transition-all below-sm:w-[90%] ' >
                    <h2 className='text-[1.5rem] font-semibold text-center text-[#108DC6] ' >Bulk Document Signer on USB</h2>
                    <p className='text-[1.2rem] text-center  ' >Our Bulk Document Signer for USB lets multiple users sign a document. It allows bulk signing or automated signing.</p>
                </div>
                <div className='flex flex-col gap-[1rem] bg-gray-100 p-[2rem] w-[30%] rounded-[1rem] items-center cursor-pointer hover:scale-[1.02] transition-all below-sm:w-[90%] ' >
                    <h2 className='text-[1.5rem] font-semibold text-center text-[#108DC6] ' >Bulk Document Signer on HSM</h2>
                    <p className='text-[1.2rem] text-center  ' >Our Document Signer for HSM gives user the facility of multiple signature along with reduction in deployment cost of solution.</p>
                </div>
                <div className='flex flex-col gap-[1rem] bg-gray-100 p-[2rem] w-[30%] rounded-[1rem] items-center cursor-pointer hover:scale-[1.02] transition-all below-sm:w-[90%] ' >
                    <h2 className='text-[1.5rem] font-semibold text-center text-[#108DC6] ' >Document Signer Certificate</h2>
                    <p className='text-[1.2rem] text-center  ' >Our Class 2 Document Signer Certificate is in PFX format and can be installed on server for signing in bulk as well as signing in automated form..</p>
                </div>
            </div>
        </div>
        <div className='bg-purple-600 text-white flex flex-col gap-[2rem] justify-center items-center pt-[3rem]    pb-[3rem] below-sm:gap-[1rem] mb-[2rem]  ' >
                <h1 className='text-[2rem] font-bold below-sm:text-[1.5rem] ' >Apply For Document Signer Certificate</h1>
                <Link href={"/buycertificate"} className="w-fit border-none rounded-[0.5rem] bg-red-600 text-white hover:scale-[1.02]  transition-all px-[1.2rem] py-[0.5rem] text-[1.3rem] font-semibold " >Buy Now </Link>
        </div>
        <div className='pt-[3rem] pb-[5rem] below-sm:p-[1rem] ' >
            <div  className='flex flex-col gap-[1.5rem] w-[95%] m-auto below-sm:w-[97%]  ' >
                <h1 className='font-bold text-[1.5rem] text-[#108DC6] ' >Document Signer Certificate Will Make YOUR Bulk Signing Easy!! Learn How</h1>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >With the world turning digital, businesses are going electronic for increasing efficiency and lowering operational costs. They need to provide security and authenticity to such an electronic business.</p>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >The application of document signer certificates along with Bulk Signing Tool makes it easier for organizations to sign bulk documents without any manual intervention. It runs on the local machine and requires no manual monitoring once configured.</p>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >Document Signer Certificate when used with Bulk Singer Tool, helps you to Sign multiple documents in PDF and XML form using an X.509 certificate.</p>
                <h1  className='font-bold text-[1.5rem] text-[#108DC6] '>The Use Of Class 3 Document Signer Certificate:</h1>
                <p className='text-gray-600 font-medium text-[1.1rem] '>1.It is used with both variants like Hardware-Based DSC and File-Based DSC</p>
                <p className='text-gray-600 font-medium text-[1.1rem] '>2.This is used for signing PDF and XML files</p>
                <p className='text-gray-600 font-medium text-[1.1rem] '>3.This tool comes with the feature of embedding text, graphics, and description</p>
                <p className='text-gray-600 font-medium text-[1.1rem] '>4.We can set the timer also of signing</p>
                <p className='text-gray-600 font-medium text-[1.1rem] '>5.We can set our coordinates of the signature box along with signature</p>
                <p className='text-gray-600 font-medium text-[1.1rem] '>6.It comes with the option of API integration as well</p>
                <p className='text-gray-600 font-medium text-[1.1rem] '>7.It has an option of “multi-user” model where the same license can be used for multiple machines [need not to be put on server]</p>
                <p className='text-gray-600 font-medium text-[1.1rem] '>8.This tool has an important aspect where we can maintain the “original file path” of the source file.</p>
                <h1 className='font-bold text-[1.5rem] text-[#108DC6] ' >Business Benefits</h1>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >⭐ Automate and make the business process paperless</p>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >⭐ Provide security and authentication to the data</p>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >⭐ Document Signing</p>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >⭐ Information Signing</p>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >⭐ Easy and seamless integration with online processes</p>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >⭐ Online Signing</p>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >⭐ Compliance with standards/regulations</p>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >⭐ Organizational Identity</p>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >⭐ Optimize business process efficiencies</p>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >⭐ Cut operational costs</p>
                <p className='text-gray-600 font-medium text-[1.1rem] ' >⭐ The automated signing of files of any format (fast signing speed)</p>
                <p className='text-gray-600 font-medium text-[1.1rem] '> Document Signer Certificates for organizations are designed to generate maximum output using the optimum use of resources. Multiple profiles can run simultaneously ensuring thousands of files are getting signed making it a blazing fast files signing solution.</p>
            </div>
        </div>
   </div>
   <Footer/>
   </>
  )
}

export default page
