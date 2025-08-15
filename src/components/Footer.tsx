import Image from 'next/image';
import React from 'react';
import model1 from "../assets/images/SM_3_final copia.png";
import RippleButton from './RippleButton';
import NavigationArrow from './NavigationArrow';

const EmailInput = () => {
  return (
    <div className="flex items-center border border-white px-3 py-2 w-[100%] lg:w-[400px] mt-5 relative">
      <input
        type="email"
        placeholder="Your email"
        className="flex-1 bg-transparent text-white font-asty text-[14px] placeholder-white placeholder:opacity-35 focus:outline-none"
      />
      <div className="flex items-center">
        <button className="text-white opacity-20 font-gilroy text-[0.75rem] hover:text-secondary hover:opacity-100">LET&apos;S GO</button>
        {/* <ArrowRight size={18} className="mr-2 text-secondary relative -right-2 md:absolute md:-right-5" /> */}
        <NavigationArrow direction="right" className="mr-2 text-secondary relative -right-2 md:absolute md:-right-6" />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full p-5 mt-5">
      <div className="flex items-center justify-center lg:mb-28">
        <div className="max-w-3xl flex-1 lg:mx-20">
          <div className="w-full relative">
            <div className="mx-auto w-full">
              <div className="lg:flex items-center gap-[90px]">
                <div className="md:hidden mb-10">
                  <p className="italic text-secondary font-caslon text-[1.3rem] md:text-[1.375rem] mt-4">
                    Don&apos;t be a stranger. Stay in touch!
                  </p>
                  <p className="mt-2 text-base font-asty">
                    Sign up to get awesome updates from Dot!
                  </p>  
                  <EmailInput />
                </div>
                <div className="mb-7 md:mb-0">
                  <h1 className="text-[3.25rem] md:text-[4.1875rem] font-extrabold font-gilroy uppercase">Let&apos;s chat.</h1>
                </div>
                <div className="text-[0.95rem] font-asty mb-8 md:mb-0">
                  <p className="cursor-pointer hover:text-secondary"><a href="https://wa.me/16613685864" target="_blank">+1 661 368 5864</a></p>
                <p className="cursor-pointer hover:text-secondary"><a href="mailto:hello@dotlung.com">hello@dotlung.com</a></p>
                </div>
              </div>
              <div className="lg:flex gap-12 mt-3">
                <div className="hidden md:block">
                  <p className="italic text-secondary font-caslon text-[1.3rem] md:text-[1.375rem] mt-4">
                    Don&apos;t be a stranger. Stay in touch!
                  </p>
                  <p className="mt-2 text-base font-asty">
                    Sign up to get awesome updates from Dot!
                  </p>  
                  <EmailInput />
                </div>
                <div className="flex flex-col text-[0.75rem] font-gilroy mt-10 lg:mt-4 mr-[22px]" style={{width:140}}>
                  <a target="_blank" href="https://www.facebook.com/dotlung.co/?ref=_xav_ig_profile_page_web" style={{fontSize:14}} className="hover:text-secondary mb-3 uppercase">
                    FACEBOOK
                  </a>
                  <a target="_blank" href="https://www.instagram.com/dotlung/?hl=en" style={{fontSize:14}} className="hover:text-secondary mb-3.5 uppercase">
                    INSTAGRAM
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/dotlung/" style={{fontSize:14}} className="hover:text-secondary mb-3.5 uppercase">
                    LINKEDIN
                  </a>
                  <a target="_blank" href="https://www.threads.com/@dotlung" style={{fontSize:14}} className="hover:text-secondary mb-3.5 uppercase">
                    threads
                  </a>
                </div>
              </div>
            </div>
              <Image src={model1} alt='' width={200} height={50} className="opacity-[1] h-[12rem] absolute -bottom-24 -right-8"   />
          </div>
        </div>
      </div>
      <div className="py-2 text-start hidden lg:block mt-36 max-w-[766px] mx-auto">
        <div>
          <RippleButton href="/blog" className="font-gilroy text-[0.75rem] text-white hover:text-secondary transition-colors fixed bottom-5 left-4">
            BLOG
          </RippleButton>
        </div>
        
        <div className="text-[0.75rem] lg:text-[0.875rem] text-white opacity-20 font-asty">
          © 2025, by Mother of Social Dragons
        </div>
          
        {/* <div className="text-[0.75rem] lg:text-[0.875rem] text-white opacity-20">
          Design by <Link href="#" className="border-b pb-2 border-secondary text-white opacity-20 hover:text-white transition-colors">Sofia</Link>, 
          Code by <Link href="#" className="border-b pb-2 border-secondary text-white opacity-20 hover:text-white transition-colors">Lorenzo Bocchi</Link>
        </div> */}
        
        <p className="font-gilroy text-white text-[0.75rem] opacity-20 transition-colors fixed bottom-5 right-4">
          LIVE NOW!
        </p>
    </div>
    </footer>
  );
};

export default Footer;