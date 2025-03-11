import Image from 'next/image';
import React from 'react';
import model1 from "../assets/images/SM_3_final copia.png";
import Link from 'next/link';

const EmailInput = () => {
  return (
    <div className="flex items-center border border-white px-3 py-2 w-[100%] lg:w-[350px] mt-5">
      <input
        type="email"
        placeholder="Your e-mail"
        className="flex-1 bg-transparent text-white placeholder-white focus:outline-none"
      />
      <button className="text-white font-bold text-sm">LET&apos;S GO</button>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full p-4 font-gilroy mt-5 relative">
      <Image src={model1} alt='' width={280} className="absolute bottom-10 right-10 opacity-[1] hidden lg:block" />
      <div className="flex items-center justify-center">
        <div className="max-w-3xl flex-1 mx-20  flex justify-center">
          <div className="  flex w-full">
            <div className="mx-auto w-full lg:w-[85%]">
              <div className="lg:flex justify-between">
                <div>
                  <h1 className="text-5xl font-bold">LET’S TALK</h1>
                </div>
                <div>
                  <p className="text-lg font-caslon">+1 661 368 5864</p>
                  <p className="text-lg font-caslon">hello@dotlung.com</p>
                </div>
              </div>
              <div className="lg:flex justify-between mt-10">
                <div>
                  <p className="italic text-secondary mt-4">
                    Don’t miss out on this!
                  </p>
                  <p className="mt-2 text-lg font-caslon">
                    Get my top 5 tips to grow your Instagram / LinkedIn <br/>by
                    entering your e-mail address here:
                  </p>
                  <EmailInput />
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
      <div className="py-2 px-6 text-center lg:flex justify-between items-center">
        <div>
          <Link href="/blog" className="font-bold text-sm hover:text-indigo-200 transition-colors">
            BLOG
          </Link>
        </div>
        
        <div className="text-xs text-indigo-200">
          © 2018, by Dot Lang
        </div>
          
        <div className="text-xs text-indigo-200">
          Design by <Link href="#" className="border-b border-secondary text-white hover:text-indigo-200 transition-colors">Sofia</Link>, 
          Code by <Link href="#" className="border-b border-secondary text-white hover:text-indigo-200 transition-colors">Lorenzo Bocchi</Link>
        </div>
        
        <Link href="/live" className="text-xs font-semibold hover:text-indigo-200 transition-colors">
          LIVE NOW!
        </Link>
    </div>
    </footer>
  );
};

export default Footer;