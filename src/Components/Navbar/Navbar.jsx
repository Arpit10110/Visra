"use client";
import { useState } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 bg-white z-50 flex h-[15vh] justify-between pr-8 pl-8 items-center below-sm:pr-2 below-sm:pl-3 shadow-md below-sm:h-auto below-sm:p-[1rem] ">
        <div className="w-[7%]  below-tab:w-[15%]  ">
          <Image className="w-full" src={Logo} alt="Visra" />
        </div>

        <div className="navlinks flex gap-9 text-[1.1rem] below-sm:hidden below-tab:text-[1rem] below-tab:gap-5 ">
          <Link className="hover:text-red-400" href={"/"}>Home</Link>
          <Link className="hover:text-red-400" href={"/buycertificate"}>Buy Certificate</Link>
          <Link className="hover:text-red-400" href={"/doucment-signer"}>Document Signer</Link>
          <Link className="hover:text-red-400" href={"/download"}>Download</Link>
          <Link className="hover:text-red-400" href={"/become-a-partner"}>Become a Partner</Link>
          <Link className="hover:text-red-400" href={"/contact"}>Contact</Link>
        </div>

        <div className="hidden below-sm:flex">
          <button 
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon className="!text-[3rem]" />
          </button>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <div className="flex flex-col w-[100%] bg-gray-700 text-white gap-[2rem] p-[1rem] h-[100vh] justify-center text-[1.5rem]">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/buycertificate" onClick={() => setOpen(false)}>Buy Certificate</Link>
              <Link href="/doucment-signer" onClick={() => setOpen(false)}>Document Signer</Link>
              <Link href="/download" onClick={() => setOpen(false)}>Download</Link>
              <Link href="/become-a-partner" onClick={() => setOpen(false)}>Become a Partner</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
