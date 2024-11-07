import Navbar from '@/Components/Navbar/Navbar'
import React from 'react'
import "@/Style/DocumentSigner.css"
import  DocumentSignerImg2 from "@/assets/DocumentSignerImg2.jpg"
import Image from "next/image";
const page = () => {
  return (
   <>
   <Navbar/>
   <div>
    <div className='Doctopbanner w-full h-[50vh] flex items-end below-sm:h-[40vh] ' >
            <div className=' w-[38%] flex justify-center items-center flex-col gap-[0.5rem] text-[1.5rem] text-white below-sm:w-[100%]  ' >
                <h1 className='text-center font-semibold'>Document Signer Certificate</h1>
                <p className='text-center font-semibold' >We provide Bulk Document Signer for HSM and USB  to sign all types of documents (pdf, docs, etc)</p>
            </div>
    </div>
    <div className=' pt-[4rem] pb-[4rem] ' >
        <h1 className='text-center font-semibold text-[3rem] mt-[1rem] mb-[4rem] ' >What is Document Signer Certificate?</h1>
        <div className='flex justify-evenly items-center ' >
            <div className='flex gap-[1rem] flex-col text-gray-600 w-[40%] ' >
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
            <div className='w-[40%]' >
                <Image className='w-full object-cover rounded-[1rem] ' src={DocumentSignerImg2} alt="" />
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default page
