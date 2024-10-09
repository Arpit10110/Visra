import React from 'react';
import HandshakeIcon from '@mui/icons-material/Handshake';
import DownloadIcon from '@mui/icons-material/Download';
import InfoIcon from '@mui/icons-material/Info';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Link from 'next/link';
const Section5 = () => {
  const data = [
    {
      icon: HandshakeIcon,
      title: "Become Partner",
      desc: "Best collaboration create something than the sum of what each person can create own their own"
    },
    {
      icon: DownloadIcon,
      title: "Downloads",
      desc: "Download Utility drivers and token drivers for download your digital certificate"
    },
    {
      icon: InfoIcon,
      title: "DSC Status",
      desc: "Check your DSC status with application number or enter contract number with date of birth"
    },
    {
      icon: LocalPhoneIcon,
      title: "Contact Us",
      desc: "Please contact us for any query. Don't ask unnecessary information."
    },
    {
      icon: ShoppingCartRoundedIcon,
      title: "Buy Now",
      desc: "Buy digital certificate for secure signing and encrypt document for e-tendering or e-filing."
    },
  ];

  return (
    <div className='flex pb-[8rem] flex-col justify-center items-center gap-[3rem] ' >
        <h2 className='text-[2.5rem] font-medium  underline ' >Our Service</h2>
        <div className='flex flex-wrap  gap-[3rem] justify-center  '>
      {data.map((item, index) => {
        const IconComponent = item.icon; 
        return (
            <div className='w-[28%] border-[3px] border-gray-500 rounded-[1rem] p-[1rem] text-[1.1rem] flex
             flex-col justify-center items-center gap-[0.5rem] bg-gray-100 hover:scale-[1.02] transition-all  below-sm:w-[85%] '   key={index} >
                 <IconComponent className='text-green-500 text-[2rem] below-sm:text-[3rem] '  /> 
                  <h4 className='font-semibold text-[1.3rem] ' >{item.title}</h4> 
                  <p className='text-center' >{item.desc}</p> 
                  <Link href={`/${item.title}`} >Click me{"->"}</Link>  
            </div>
        );
      })}
        </div>
    </div>
  );
}

export default Section5;
