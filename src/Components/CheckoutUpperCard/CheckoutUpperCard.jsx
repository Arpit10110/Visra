import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UsbIcon from "@mui/icons-material/Usb";
import UsbOffIcon from "@mui/icons-material/UsbOff";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AssistantIcon from "@mui/icons-material/Assistant";
import DangerousIcon from "@mui/icons-material/Dangerous";
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";
const CheckoutUpperCard = ({ profile, assistance, classify, token, years }) => {
  var showPrfofile="";
  if(profile=="Foreign_Oraganization"){
    showPrfofile="Foreign Oraganization";
  }
  else if (profile=="IET"){
    showPrfofile="IET (DGFT)"
  }
  else if(profile=="Foreign_Individual"){
    showPrfofile="Foreign Individual"
  }
  else if(profile=="Document_Signer"){
    showPrfofile="Document Signer"
  }
  else{
    showPrfofile=profile
  }


  return (
    <>
      <div className="w-[90%] flex m-auto mt-[3rem] p-[1rem] justify-between border-[2px] border-blue-400 items-center rounded-[0.5rem] bg-blue-100 ">
        <div className="flex gap-[1rem] items-center " >
          <div className="bg-blue-500 p-[0.4rem] text-[1.1rem] pt-[1rem] pb-[1rem] border-[3px] border-green-500   text-white flex items-center justify-center flex-col gap-[0.2rem] rounded-[0.5rem] "  >
            <GroupIcon className="!text-[1.7rem]"  />
            <h2>{showPrfofile}</h2>
          </div>
          <div className="flex gap-[1rem] items-center bg-white h-fit p-[0.2rem] text-[1rem] rounded-[0.2rem] ">
            {classify == "Sign" ? (
              <h4 className=" flex gap-[2px] border-r-[2px] pr-[0.3rem] border-blue-300  " >
                <ReceiptLongIcon />
                Sign
              </h4>
            ) : (
              <h4 className="flex gap-[2px] border-r-[2px] pr-[0.3rem] border-blue-300  " >
                <LockPersonIcon />
                Sign&Encrypt
              </h4>
            )}
            <h4 className=" flex gap-[2px] border-r-[2px] pr-[0.3rem] border-blue-300  ">
              <CalendarMonthIcon />
              {years}
            </h4  >
            {token == true ? (
              <h4 className="flex gap-[2px] border-r-[2px] pr-[0.3rem] border-blue-300  " >
                <UsbIcon />
                USB Token
              </h4>
            ) : (
              <h4 className=" flex gap-[2px] border-r-[2px] pr-[0.3rem] border-blue-300  ">
                <UsbOffIcon />
                USB Token Not Required
              </h4>
            )}
            {assistance == true ? (
              <h4 className="gap-[2px] flex items-center" >
                <AssistantIcon />
                Assistance Services
              </h4>
            ) : (
              <h4 className="gap-[2px] flex items-center">
                <DangerousIcon />
                Assistance Services Not Required
              </h4>
            )}
          </div>
        </div>
        <Link href="/buycertificate" className="flex gap-[0.5rem] items-end border-[2px] border-black rounded-[5px] p-[0.5rem] " >
        <EditIcon className="border-[1px] border-black rounded-[3px] p-[0.2rem] !text-[1.7rem] " />
        <h2 href="/buycertificate" className="text-[1.3rem] " >Change</h2>
        </Link>
      </div>
    </>
  );
};

export default CheckoutUpperCard;
