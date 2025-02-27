import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from "../../../public/assets/svgs/logo.svg";

const Contact = () => {
  return (
    <div>
      <Image className="fixed left-5 top-5" src={Logo} alt="Logo" width={50} />
      <div className="font-gilroy cursor-pointer transition-colors text-center text-sm fixed right-6">
          CLOSE <span className="text-secondary">X</span>
        </div>
    <div className="w-full p-4 font-gilroy mt-5 container mx-auto">
      <div className="flex items-center justify-center">
        <div className="max-w-3xl flex-1 mx-20  flex justify-center">
          <div className="  flex w-full">
            <div style={{width:"85%"}}>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-5xl font-bold">LET’S TALK</h1>
                </div>
                <div>
                  <p className="text-lg font-caslon">+1 661 368 5864</p>
                  <p className="text-lg font-caslon">hello@dotlung.com</p>
                </div>
              </div>
              <div className="flex justify-between mt-10">
                <div>
                  <p className="italic text-secondary mt-4">
                    Don’t miss out on this!
                  </p>
                  <p className="mt-2 text-lg font-caslon">
                    Get my top 5 tips to grow your Instagram / LinkedIn <br/>by
                    entering your e-mail address here:
                  </p>
                </div>
                <div className="flex flex-col text-lg  mt-4" style={{width:140}}>
                  <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                    FACEBOOK
                  </a>
                  <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                    INSTAGRAM
                  </a>
                  <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                    TWITTER
                  </a>
                  <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                    SNAPCHAT
                  </a>
                  <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                    SKYPE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 px-6 flex justify-between items-center">
        
        <div className="text-xs text-indigo-200">
          © 2018, by Dot Lang
        </div>
          
        <div className="text-xs text-indigo-200">
          Design by <Link href="#" className="border-b border-secondary text-white hover:text-indigo-200 transition-colors">Sofia</Link>, 
          Code by <Link href="#" className="border-b border-secondary text-white hover:text-indigo-200 transition-colors">Lorenzo Bocchi</Link>
        </div>
        
    </div>
    </div>
    </div>
  );
};

export default Contact;