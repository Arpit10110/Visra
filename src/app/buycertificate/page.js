'use client';
import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import "@/Style/Buycertificate.css";
import { useState } from 'react';
import buyCertiBanner from "@/assets/buyCertiBanner.png"
import Image from 'next/image';
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
      <Image src={buyCertiBanner} alt="buyCertiBanner"  />
      <div className="buy-Certificate-main">
      <div className="section-main">
        {/* Profile Selection */}
        <div className="section">
        <h3>Profile</h3>
        <div className="sector-btn-div">

          <button onClick={() => setProfile('Individual')} className={profile === 'Individual' ? 'active' : ''}>Individual</button>
          <button onClick={() => setProfile('Organization')} className={profile === 'Organization' ? 'active' : ''}>Organization</button>
          <button onClick={() =>{ setClassify("Sign & Encryprion"); setProfile('IET')} } className={profile === 'IET' ? 'active' : ''}>IET (DGFT)</button>
          <button onClick={() => setProfile('Government')} className={profile === 'Government' ? 'active' : ''}>Government</button>
        </div>
        </div>
        {/* Classify */}
        <div className="section">
          <h3>Classify</h3>
          <div className="sector-btn-div">
          <button onClick={() => profile !== 'IET' && setClassify('Sign')} className={classify === 'Sign' && profile !== 'IET' ? 'active' : ''} disabled={profile === 'IET'}>Sign</button>
          <button onClick={() => setClassify('Sign & Encryprion')} className={classify === 'Sign & Encryprion' ? 'active' : ''}>Sign & Encrypt</button>
          </div>
        </div>
        {/* Year Selection */}
        <div className="section">
          <h3>Validity (Years)</h3>
          <div className="sector-btn-div">
            {[1, 2, 3].map(year => (
              <button key={year} onClick={() => setYears(year)} className={years === year ? 'active' : ''}>
                {year} Year{year > 1 ? 's' : ''}
              </button>
            ))}
          </div>
        </div>
        {/* Token Selection */}
        <div className="section">
          <h3>USB Token</h3>
          <div className="sector-btn-div">
          <button onClick={() => setToken(true)} className={token ? 'active' : ''}>USB Token</button>
          <button onClick={() => setToken(false)} className={!token ? 'active' : ''}>USB Token Not Required</button>
          </div>
        </div>
        {/* Assistance Service Selection */}
        <div className="section">
          <h3>Assistance Service</h3>
          <div className="sector-btn-div">
          <button onClick={() => setAssistance(true)} className={assistance ? 'active' : ''}>Need Assistance Services</button>
          <button onClick={() => setAssistance(false)} className={!assistance ? 'active' : ''}>Assistance Services Not Required</button>
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
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default page;
