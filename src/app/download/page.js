import React from 'react'
import Navbar from "@/Components/Navbar/Navbar.jsx"
import Image from 'next/image'
import  DownloadImg1 from "@/assets/downloadImg1.png"
import  DownloadImg2 from "@/assets/downloadImg2.png"
import  DownloadImg3 from "@/assets/downloadImg3.png"
import  DownloadImg4 from "@/assets/downloadImg4.png"
import DownloadIcon from '@mui/icons-material/Download';
import Footer from '@/Components/Footer/Footer'
const page = () => {
  const letterdata = [
    {
      text:"Authority Letter Organization",
    },
    {
      text:"Board Resolution For EKYC and DSC",
    },
    {
      text:"Government Authorization Letter",
    },
    {
      text:"Non Submission Bank Statement",
    },
    {
      text:"Security Letter Class 3 Document Signer",
    },
    {
      text:"Declaration letter Class2 Document Signer",
    },
    {
      text:"Letter of Identity Proof by Organization",
    },
    {
      text:"Security letter Class2 Document Signer",
    },
  ];
  return (
    <>
        <Navbar/>
        <div>
            <div className='flex py-[4rem] justify-center items-center bg-gradient-to-r from-fuchsia-500 to-cyan-500   ' >
                <h1 className='text-[4vw] font-semibold text-white ' >Digital Signature Software</h1>
            </div>
            <div>
              <div className='flex flex-col gap-[2rem]  w-[90%] m-auto mt-[3rem] below-tab:w-[98%]  ' >
                <h1 className='text-enter text-[3rem] font-semibold below-sm:text-[2.5rem] ' >Digital Signature Hardware</h1>
                <p className='text-[1.2rem] text-gray-600 ' >Our company has tested & approved the following products which conform to the established International Security Level for protection of your credentials.</p>
                <p className='text-[1.2rem] text-gray-600  ' >We do not endorse any company. The companies of the product listed here have agreed to offer Quality Technical Support along with assurance that their products will be available across India for users to buy conveniently.</p>
              </div>
              <div className='w-[70%] m-auto mt-[3rem] bg-gray-200 below-tab:w-[100%] ' >
                  <div className='flex w-full ' >
                      <h1 className='text-center text-[1.2rem] font-semibold w-[20%] bg-blue-600 text-white   ' ></h1>
                      <h1 className='bg-blue-600 text-white text-center text-[1rem] font-semibold border-l-[3px] border-gray-300  w-[20%] ' >Products</h1>
                      <h1 className=' bg-blue-600 text-white text-center text-[1rem] font-semibold border-l-[3px] border-gray-300 w-[20%]  ' >Download Hardware</h1>
                      <h1 className='bg-blue-600 text-white text-center text-[1rem] font-semibold border-l-[3px] border-gray-300 w-[40%]  ' >Support</h1>
                  </div>
                  <div className='flex w-full border-white border-t-[3px] ' >
                      <div className='w-[20%] flex justify-center items-center ' >
                        <Image className='w-[50%] object-scale-down '  src={DownloadImg1} alt=" " />
                      </div>
                      <div className='border-l-[3px] border-white w-[20%] justify-center items-center flex ' >
                      <h1 className='text-center text-[1rem] font-semibold ' >HYP2003</h1>
                      </div>

                      <div className='border-l-[3px] border-white  w-[20%] justify-center items-center flex ' >
                      <a href='#' download="visra"  className='text-center text-[1rem] font-semibold  text-blue-500 ' >Download Now</a>
                      </div>
                      <div className='text-center flex flex-col justify-center items-center gap-[5px] text-[1rem] font-semibold border-l-[3px] border-white w-[40%]  ' >
                        <a href="tel:+918700418118">+918700418118</a>
                        <a href="mailto:digitalidentity.dsc@gmail.com">support@gmail.com</a>
                      </div>
                  </div>
                  <div className='flex w-full border-white border-t-[3px] ' >
                      <div className='w-[20%] flex justify-center items-center ' >
                        <Image className='w-[70%] object-scale-down '  src={DownloadImg2} alt=" " />
                      </div>
                      <div className='border-l-[3px] border-white w-[20%] justify-center items-center flex ' >
                      <h1 className='text-center text-[1.2rem] font-semibold ' >Watchdata Proxkey</h1>
                      </div>

                      <div className='border-l-[3px] border-white  w-[20%] justify-center items-center flex ' >
                      <a href='#' download="visra"  className='text-center text-[1rem] font-semibold  text-blue-500 ' >Download Now</a>
                      </div>
                      <div className='text-center flex flex-col justify-center items-center gap-[5px]  text-[1rem] font-semibold border-l-[3px] border-white w-[40%]  ' >
                        <a href="tel:+918700418118">+918700418118</a>
                        <a href="mailto:digitalidentity.dsc@gmail.com">support@gmail.com</a>
                      </div>
                  </div>
                  <div className='flex w-full border-white border-t-[3px] ' >
                      <div className='w-[20%] flex justify-center items-center ' >
                        <Image className='w-[70%] object-scale-down '  src={DownloadImg3} alt=" " />
                      </div>
                      <div className='border-l-[3px] border-white w-[20%] justify-center items-center flex ' >
                      <h1 className='text-center text-[1.2rem] font-semibold ' >Gemalto</h1>
                      </div>

                      <div className='border-l-[3px] border-white  w-[20%] justify-center items-center flex ' >
                      <a href='#' download="visra"  className='text-center text-[1rem] font-semibold  text-blue-500 ' >Download Now</a>
                      </div>
                      <div className='text-center flex flex-col justify-center items-center gap-[5px]  text-[1rem] font-semibold border-l-[3px] border-white w-[40%]  ' >
                        <a href="tel:+918700418118">+918700418118</a>
                        <a href="mailto:digitalidentity.dsc@gmail.com">support@gmail.com</a>
                      </div>
                  </div>
                  <div className='flex w-full border-white border-t-[3px] ' >
                      <div className='w-[20%] flex justify-center items-center ' >
                        <Image className='w-[50%] object-scale-down  '  src={DownloadImg4} alt=" " />
                      </div>
                      <div className='border-l-[3px] border-white w-[20%] justify-center items-center flex ' >
                      <h1 className='text-center text-[1.2rem] font-semibold ' >mToken</h1>
                      </div>

                      <div className='border-l-[3px] border-white  w-[20%] justify-center items-center flex ' >
                      <a href='#' download="visra"  className='text-center text-[1rem] font-semibold  text-blue-500 ' >Download Now</a>
                      </div>
                      <div className='text-center flex flex-col justify-center items-center gap-[5px]  text-[1rem] font-semibold border-l-[3px] border-white w-[40%]  ' >
                        <a href="tel:+918700418118">+918700418118</a>
                        <a href="mailto:digitalidentity.dsc@gmail.com">support@gmail.com</a>
                      </div>
                  </div>
              </div>
              <p  className='text-[1.2rem] text-gray-600 mt-[3rem] w-[90%] m-auto '  >Any of the USB devices mentioned above could be used to save Digital Signature Certificate. These devices are reliable, safe and portable. To download DSC you have to insert the USB token (in which you want to download the certificate) to your computer and install its driver (pertaining to the making of the token) which can be downloaded from the section mentioned above. Only after installing the driver you would be able to download the certificate in the token.</p>
            </div>
            <div className='py-[3rem]' >
              <div className='flex flex-col gap-[2rem]  w-[90%] m-auto below-tab:w-[98%]   ' >
                <h1 className='text-enter text-[3rem] font-semibold below-sm:text-[2.5rem] ' >Digital Signature Repository</h1>
                <p className='text-[1.2rem] text-gray-600 ' >Our Repository contains all the information on downloads available on our website..</p>
                <p className='text-[1.2rem] text-gray-600  ' >If you are an end-user looking for application forms to apply for DSC,visit our certificates page. It has all the information and detailed explanations you need on the various types of Digital Signature Certificates that we offer. You can also download the same page from below.</p>
              </div>
              <h1 className='text-[3rem] text-center font-semibold mt-[2rem]  ' >Letter Formats</h1>
              <div className='w-[70%] m-auto mt-[2rem] border-[3px] border-black below-tab:w-[95%] ' >
                <div className='w-full flex bg-black text-white  ' >
                  <div className='w-[20%] flex justify-center items-center text-[1.2rem] ' >
                    <h1>S.No.</h1>
                  </div>
                  <div className='w-[70%]  flex justify-center items-center text-[1.2rem]' > 
                    <h1>	Letter Formats</h1>
                  </div>
                  <div className='w-[10%] border-white flex justify-center items-center' >
                  </div>
                </div>
                {
                    letterdata.map((i,index)=>{
                        return(
                          <div key={index} className='w-full flex  text-black border-t-[3px] border-black ' >
                          <div className='w-[20%] flex justify-center items-center text-[1.2rem] ' >
                            <h1>{index+1}</h1>
                          </div>
                          <div className='w-[70%] border-l-[3px] border-black flex pl-[1rem]  text-[1.2rem]' > 
                            <h1>{i.text}</h1>
                          </div>
                          <div className='w-[10%] border-l-[3px] border-black flex justify-center items-center' >
                            <a href="https://www.certificate.digital/download/authority-letter-organisation-ekyc.docx">
                            <DownloadIcon className='!text-[1.2rem] text-blue-500 ' />
                            </a>
                          </div>
                        </div>
                        )
                    })
                }
              </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default page