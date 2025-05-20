import Image from 'next/image';
import React from 'react';
import model1 from "../assets/images/SM_3_final copia.png";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RippleButton from './RippleButton';

const EmailInput = () => {
  return (
    <div className="flex items-center border border-white px-3 py-2 w-[100%] lg:w-[350px] mt-5 relative">
      <input
        type="email"
        placeholder="Your email"
        className="flex-1 bg-transparent text-white font-asty text-[14px] placeholder-[#ffffff77] focus:outline-none"
      />
      <div className="flex items-center">
        <button className="text-[#ffffff77] font-gilroy text-[0.75rem] hover:text-secondary">LET&apos;S GO</button>
        <ArrowRight size={18} className="mr-2 text-secondary relative -right-2 md:absolute md:-right-5" />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full p-5 mt-5">
      <div className="flex items-center justify-center lg:mb-28">
        <div className="max-w-3xl flex-1 lg:mx-20  flex justify-center">
          <div className="flex w-full">
            <div className="mx-auto w-full">
              <div className="lg:flex items-center gap-12 justify-between">
                <div className="md:hidden mb-10">
                  <p className="italic text-secondary font-caslon text-[1.3rem] md:text-[1.375rem] mt-4">
                    Don’t miss out on this!
                  </p>
                  <p className="mt-2 text-base font-asty">
                    Get my top 5 tips to grow your Instagram / LinkedIn by
                    entering your e-mail address here:
                  </p>  
                  <EmailInput />
                </div>
                <div className="mb-7 md:mb-0">
                  <h1 className="text-[3.25rem] md:text-[4.1875rem] font-extrabold font-gilroy">LET’S TALK</h1>
                </div>
                <div className="text-[0.95rem] font-asty mb-8 md:mb-0">
                  <p className="cursor-pointer"><a href="https://wa.me/16613685864" target="_blank">+1 661 368 5864</a></p>
                <p className="cursor-pointer"><a href="mailto:hello@dotlung.com">hello@dotlung.com</a></p>
                </div>
              </div>
              <div className="lg:flex gap-4 justify-between mt-3">
                <div className="hidden md:block">
                  <p className="italic text-secondary font-caslon text-[1.3rem] md:text-[1.375rem] mt-4">
                    Don’t miss out on this!
                  </p>
                  <p className="mt-2 text-base font-asty">
                    Get my top 5 tips to grow your Instagram / LinkedIn <br/>by
                    entering your e-mail address here:
                  </p>  
                  <EmailInput />
                </div>
                <div className="flex flex-col text-[0.75rem] font-gilroy mt-10 lg:mt-4" style={{width:140}}>
                  <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                    FACEBOOK
                  </a>
                  <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                    INSTAGRAM
                  </a>
                  <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                    LINKEDIN
                  </a>
                  <a href="#" style={{fontSize:14}} className="hover:underline mb-3">
                    MESSENGER
                  </a>
                </div>
              </div>
            </div>
              <Image src={model1} alt='' width={250} height={50} className="opacity-[1] h-[11.25rem] hidden lg:block relative top-[14rem] left-10"   />
          </div>
        </div>
      </div>
      <div className="py-2 px-6 text-center hidden lg:flex justify-between items-center">
        <h1></h1>
        <div>
          <RippleButton href="/blog" className="font-bold text-sm hover:text-indigo-200 transition-colors fixed bottom-5 left-4">
            BLOG
          </RippleButton>
        </div>
        
        <div className="text-xs text-indigo-200">
          © 2018, by Dot Lang
        </div>
          
        <div className="text-xs text-indigo-200">
          Design by <Link href="#" className="border-b border-secondary text-white hover:text-indigo-200 transition-colors">Sofia</Link>, 
          Code by <Link href="#" className="border-b border-secondary text-white hover:text-indigo-200 transition-colors">Lorenzo Bocchi</Link>
        </div>
        
        <Link target="_blank" href="https://www.domestika.org/es/courses/1102-estrategias-de-instagram-para-desarrollo-de-marcas" className="text-xs font-semibold hover:text-indigo-200 transition-colors fixed bottom-5 right-4">
          LIVE NOW!
        </Link>
        <h1></h1>
        <h1></h1>
    </div>
    </footer>
  );
};

export default Footer;