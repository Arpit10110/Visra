'use client';
import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import "@/Style/Buycertificate.css";
import { useState } from 'react';
import buyCertiBanner from "@/assets/buyCertiBanner.png"
import Image from 'next/image';
import Link from 'next/link';
//icons
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BalanceIcon from '@mui/icons-material/Balance';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import UsbIcon from '@mui/icons-material/Usb';
import UsbOffIcon from '@mui/icons-material/UsbOff';
import AssistantIcon from '@mui/icons-material/Assistant';
import DangerousIcon from '@mui/icons-material/Dangerous';
const page = () => {
  const [profile, setProfile] = useState('Individual');
  const [classify, setClassify] = useState('Sign');
  const [years, setYears] = useState(1);
  const [token, setToken] = useState(true); // USB Token or No Token
  const [assistance, setAssistance] = useState(true); // Assistance Service or No Assistance

  const individualOrganization = [
    { productType: "sign", validity: 1, Tocken: true, Assistance_Service: true, DSC_Price: 847.46, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 289.83, Total_Amount: 1899.99 },
    { productType: "sign", validity: 2, Tocken: true, Assistance_Service: true, DSC_Price: 974.58, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 312.71, Total_Amount: 2049.99 },
    { productType: "sign", validity: 3, Tocken: true, Assistance_Service: true, DSC_Price: 1483.05, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 404.23, Total_Amount: 2649.98 },
    { productType: "Sign & Encryprion", validity: 1, Tocken: true, Assistance_Service: true, DSC_Price: 1694.92, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 442.37, Total_Amount: 2899.99 },
    { productType: "Sign & Encryprion", validity: 2, Tocken: true, Assistance_Service: true, DSC_Price: 2033.9, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 503.39, Total_Amount: 3299.99 },
    { productType: "Sign & Encryprion", validity: 3, Tocken: true, Assistance_Service: true, DSC_Price: 3135.59, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 701.69, Total_Amount: 4599.98 },
  ];

  const DGFT_DSC = [
    { productType: "Sign & Encryprion", validity: 1, Tocken: true, Assistance_Service: true, DSC_Price: 1864.41, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 442.37, Total_Amount: 3099.99 },
    { productType: "Sign & Encryprion", validity: 2, Tocken: true, Assistance_Service: true, DSC_Price: 2372.88, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 503.39, Total_Amount: 3699.98 },
    { productType: "Sign & Encryprion", validity: 3, Tocken: true, Assistance_Service: true, DSC_Price: 3305.08, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 701.69, Total_Amount: 4799.98 },
  ];

  const GOVT_DSC = [
    { productType: "sign", validity: 1, Tocken: true, Assistance_Service: true, DSC_Price: 847.46, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 289.83, Total_Amount: 1899.99 },
    { productType: "sign", validity: 2, Tocken: true, Assistance_Service: true, DSC_Price: 974.58, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 312.71, Total_Amount: 2049.99 },
    { productType: "sign", validity: 3, Tocken: true, Assistance_Service: true, DSC_Price: 1483.05, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 404.23, Total_Amount: 2649.98 },
    { productType: "Sign & Encryprion", validity: 1, Tocken: true, Assistance_Service: true, DSC_Price: 1694.92, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 442.37, Total_Amount: 2899.99 },
    { productType: "Sign & Encryprion", validity: 2, Tocken: true, Assistance_Service: true, DSC_Price: 2033.9, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 503.39, Total_Amount: 3299.99 },
    { productType: "Sign & Encryprion", validity: 3, Tocken: true, Assistance_Service: true, DSC_Price: 3135.59, Token_Price: 423.72, Asst_Service_Price: 338.98, Gst: 701.69, Total_Amount: 4599.98 },
  ];

  const getFilteredDSC = () => {
    let dataSource;
    if (profile === "Individual" || profile === "Organization") {
      dataSource = individualOrganization;
    } else if (profile === "IET") {
      dataSource = DGFT_DSC;
    } else {
      dataSource = GOVT_DSC;
    }

    // Filter based on classify and years
    const filtered = dataSource.filter(item =>
      item.productType.toLowerCase() === classify.toLowerCase() && item.validity === years
    );

    return filtered.length > 0 ? filtered[0] : null; // Return the first matched item or null
  };

  const filteredDSC = getFilteredDSC();

  return (
    <>
      <Navbar />
      <Image className='below-sm:hidden' src={buyCertiBanner} alt="buyCertiBanner"  />
      <h1 className='hidden below-sm:flex below-sm:mt-[2rem] below-sm:text-[2rem] below-sm:border-b-[3px] w-fit  below-sm:border-red-300 below-sm:ml-[1rem] font-semibold text-blue-400 ' >👉Buy Certificate</h1>
      <div className="buy-Certificate-main">
      <div className="section-main">
        {/* Profile Selection */}
        <div className="section">
        <h3>Profile</h3>
        <div className="sector-btn-div">

          <button onClick={() => setProfile('Individual')} className={profile === 'Individual' ? 'active' : ''}><GroupIcon/>Individual</button>
          <button onClick={() => setProfile('Organization')} className={profile === 'Organization' ? 'active' : ''}><BalanceIcon/>Organization</button>
          <button onClick={() =>{ setClassify("Sign & Encryprion"); setProfile('IET')} } className={profile === 'IET' ? 'active' : ''}><PublicIcon/>IET (DGFT)</button>
          <button onClick={() => setProfile('Government')} className={profile === 'Government' ? 'active' : ''}><AccountBalanceIcon/>Government</button>
        </div>
        </div>
        {/* Classify */}
        <div className="section">
          <h3>Classify</h3>
          <div className="sector-btn-div">
          <button onClick={() => profile !== 'IET' && setClassify('Sign')} className={classify === 'Sign' && profile !== 'IET' ? 'active' : ''} disabled={profile === 'IET'}><ReceiptLongIcon/>Sign</button>
          <button onClick={() => setClassify('Sign & Encryprion')} className={classify === 'Sign & Encryprion' ? 'active' : ''}><LockPersonIcon/>Sign & Encrypt</button>
          </div>
        </div>
        {/* Year Selection */}
        <div className="section">
          <h3>Validity (Years)</h3>
          <div className="sector-btn-div">
            {[1, 2, 3].map(year => (
              <button key={year} onClick={() => setYears(year)} className={years === year ? 'active' : ''}>
               <CalendarMonthIcon/> {year} Year{year > 1 ? 's' : ''}
              </button>
            ))}
          </div>
        </div>
        {/* Token Selection */}
        <div className="section">
          <h3>USB Token</h3>
          <div className="sector-btn-div">
          <button onClick={() => setToken(true)} className={token ? 'active' : ''}><UsbIcon/>USB Token</button>
          <button onClick={() => setToken(false)} className={!token ? 'active' : ''}><UsbOffIcon/>USB Token Not Required</button>
          </div>
        </div>
        {/* Assistance Service Selection */}
        <div className="section">
          <h3>Assistance Service</h3>
          <div className="sector-btn-div">
          <button title="Our service includes assistance from processing to downloading your DSC. If you encounter any issues during the validity period while using your DSC, our team will support you. Additionally, you are entitled to a one-time DSC redownload facility in case it gets lost or deleted." onClick={() => setAssistance(true)} className={assistance ? 'active' : ''}><AssistantIcon/>Need Assistance Services</button>
          <button onClick={() => setAssistance(false)} className={!assistance ? 'active' : ''}><DangerousIcon/>Assistance Services Not Required</button>
          </div>
        </div>
      </div>
        {/* Summary Table */}
        <div className="summary">
          {filteredDSC ? (
            <table>
              <tbody>
                <tr>
                  <td>DSC Price:</td>
                  <td>₹{filteredDSC.DSC_Price.toFixed(2)}</td>
                </tr>
                {token && (
                  <tr>
                    <td>USB Token Price:</td>
                    <td>₹{filteredDSC.Token_Price.toFixed(2)}</td>
                  </tr>
                )}
                {assistance && (
                  <tr>
                    <td>Assistance Service Price:</td>
                    <td>₹{filteredDSC.Asst_Service_Price.toFixed(2)}</td>
                  </tr>
                )}
                <tr>
                  <td>GST:</td>
                  <td>₹{filteredDSC.Gst.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Total Amount:</td>
                  <td>₹{(
                    filteredDSC.Total_Amount + 
                    (token ? filteredDSC.Token_Price : 0) + 
                    (assistance ? filteredDSC.Asst_Service_Price : 0)
                  ).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>No matching records found. Please adjust your selections.</p>
          )}
          <Link href="/buynow" >Buy Certificate</Link>
        </div>
      </div>
      <div className="buy-certicate-cont">
        <div className="buy-certi-divs">
          <h1>Capricorn CA - Trusted DSC Brand in the Industry</h1>
          <h3>Capricorn CA is a trusted digital signature certificate provider in India. We are a licensed Certifying Authority (CA) recognized by the Controller of Certifying Authorities (CCA) under the Information Technology Act, 2000. Class 3 Digital Signature Certificate is now mandated for all types of transactions in India</h3>
          <h3>We cater to all users who need Digital Certificates for GST, Tenders, MCA (ROC), Income Tax, Banking, Foreign Trade, Railways, and many other purposes.</h3>
          <h3>If you're looking to buy DSC online, Capricorn CA ensures a seamless experience. Get your Class 3 DSC approval in minutes with our 100% online and paperless application.</h3>
        </div>
        <div className="buy-certi-divs">
          <h1>Digital Signature Online - Fast & Easy Process</h1>
          <h3>Getting a Digital Signature Certificate (DSC) is easy with Capricorn CA. We offer various modes to acquire your DSC, saving you time and effort. These modes are:</h3>
           <h5>👉 Online Aadhaar-Based Paperless Mode</h5>
           <h5>👉 Online Aadhaar OTP Mode</h5>
           <h5>👉 Online Aadhaar Biometric Mode</h5>
           <h5>👉 PAN-Based Mode</h5>
           <h5>👉 Capricorn Existing eKYC Mode</h5>
        </div>
        <div className="buy-certi-divs">
          <h1>Why Class 3 DSC from Capricorn CA?</h1>
           <h5>👉 Income Tax e-filing: Secure online tax returns</h5>
           <h5>👉 MCA e-Filing: Electronic corporate filings</h5>
           <h5>👉 e-Tendering: Safe online tender submissions</h5>
           <h5>👉 IRCTC (e-Ticketing): Secure railway ticket booking</h5>
           <h5>👉 DGFT/IE Code (Foreign Trade): Manage import/export documents</h5>
           <h5>👉 EPF/EPFO: Electronic provident fund transactions</h5>
           <h5>👉 GST Filing: Secure GST return filing</h5>
           <h5>👉 IPR (Trademark/Patent): Protect intellectual property online</h5>
           <h5>👉 ICEGATE:Secure customs documentation</h5>
           <h5>👉 CBSE School: Authenticate school documents securely</h5>
        </div>
        <div className="buy-certi-divs">
          <h1>Buy Digital Signature Certificate - Get the Best DSC Price</h1>
           <h3>Whether you need a Class 3 Digital Signature for personal or professional use, Capricorn CA provides the best digital signature certificates at competitive prices. Buy Class 3 DSC today and ensure the security and authenticity of your digital transactions. We have a range of options to suit your specific requirements and profile. For your convenience, the rates for each DSC type are clearly displayed above.</h3>
        </div>
      </div>
      <div className="buy-certicate-contactBox">
        <h1>Get In Touch With Us!</h1>
        <p>Click on the button given below and fill the form with the required details Our dedicated team of experts and specialists will get back to you within 24 hours! </p>
         <Link href="/contact" >Contact Us</Link>
      </div>
      <Footer/>
    </>
  );
};

export default page;
