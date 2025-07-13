"use client";
import Image from 'next/image';
import React from 'react';
import Logo from "../../../public/assets/svgs/logo.svg";
import { useRouter } from 'next/navigation';
import NavigationArrow from '../../components/NavigationArrow';
import RevealOnScroll from '../../components/RevealOnScroll';
import RevealOnScrollSpan from '../../components/RevealOnScrollSpan';

const EmailInput = () => {
  return (
    <div className="flex items-center border border-white px-3 py-2 w-[100%] lg:w-[370px] mt-5 relative">
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

const Contact = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen border-secondary border-[10px] lg:border-[50px]">
      <div className="flex items-center justify-between p-4 w-full">
        <Image onClick={() => router.push("/")} src={Logo} alt="Logo" width={50} />
        <p 
          onClick={() => router.back()} 
          className="group font-gilroy cursor-pointer transition-colors text-center text-[0.8125rem] flex items-center gap-2"
        >
          CLOSE 
          <span className="text-secondary transition-transform duration-300 group-hover:rotate-90">
            <svg className="w-4 h-4 close" fill="#f14336" viewBox="0 0 30 29" xmlns="http://www.w3.org/2000/svg">
              <path d="M84,99.7928932 L97.7885822,86.004311 L98.495689,86.7114178 L84.7071068,100.5 L98.495689,114.288582 L97.7885822,114.995689 L84,101.207107 L70.2114178,114.995689 L69.504311,114.288582 L83.2928932,100.5 L69.504311,86.7114178 L70.2114178,86.004311 L84,99.7928932 Z" transform="translate(-69 -86)" fillRule="evenodd" />
            </svg>
          </span>
        </p>
      </div>

      <div className="w-full flex-1 flex items-center justify-center">
        <div className="lg:w-[50%] lg:flex justify-start items-start px-5 lg:px-0 py-10 lg:py-0">
          <div className="max-w-lg">
            <RevealOnScroll>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-gilroy lg:w-[500px]">
                LET&apos;S GROW YOUR SOCIAL MEDIA EMPIRE TOGETHER.
              </h1>
            </RevealOnScroll>
            <div className="text-left md:hidden">
              <div className="text-[0.875rem] font-asty mt-10">
                <RevealOnScroll>
                  <p className="cursor-pointer hover:text-secondary"><a href="https://wa.me/16613685864" target="_blank">+1 661 368 5864</a></p>
                </RevealOnScroll>
                <RevealOnScroll>
                  <p className="cursor-pointer hover:text-secondary"><a href="mailto:dragons@dotlung.com">dragons@dotlung.com</a></p>
                </RevealOnScroll>
              </div>
              <div className="flex flex-col text-lg gap-5 my-10 font-bold font-gilroy">
                {/* {["FACEBOOK", "INSTAGRAM", "LINKEDIN", "THREADS"].map((platform) => (
                  <RevealOnScrollSpan key={platform}>
                    <a href="#" className="text-sm hover:underline font-bold font-gilroy uppercase">
                          {platform}
                    </a>
                  </RevealOnScrollSpan>
                ))} */}
                <RevealOnScrollSpan>
                  <a target="_blank" href="https://www.facebook.com/dotlung.co/?ref=_xav_ig_profile_page_web" style={{fontSize:14}} className="hover:text-secondary mb-3 uppercase">
                      FACEBOOK
                  </a>
                </RevealOnScrollSpan>
                <RevealOnScrollSpan>
                  <a target="_blank" href="https://www.instagram.com/dotlung/?hl=en" style={{fontSize:14}} className="hover:text-secondary mb-3 uppercase">
                    INSTAGRAM
                  </a>
                </RevealOnScrollSpan>
                <RevealOnScrollSpan>
                  <a target="_blank" href="https://www.linkedin.com/in/dotlung/" style={{fontSize:14}} className="hover:text-secondary mb-3 uppercase">
                    LINKEDIN
                  </a>
                </RevealOnScrollSpan>
                <RevealOnScrollSpan>
                  <a target="_blank" href="https://www.threads.com/@dotlung" style={{fontSize:14}} className="hover:text-secondary mb-3 uppercase">
                    threads
                  </a>
                </RevealOnScrollSpan>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-lg font-caslon mt-5 lg:w-[370px]">
                <RevealOnScrollSpan>
                  <span className="italic text-secondary">Book time with me! </span> 
                </RevealOnScrollSpan>
                <RevealOnScrollSpan>
                  Enter your e-mail address right here:
                </RevealOnScrollSpan>
              </p>
              <div className="w-[95%] mb-5 lg:mb-0 lg:w-[300px]">
                <RevealOnScroll>
                  <EmailInput />
                </RevealOnScroll>
              </div>
            </div>
          </div>

          <div>
            <div className="md:hidden">
              <p className="text-lg font-caslon mt-5 lg:w-[300px]">
                <RevealOnScrollSpan>
                  <span className="italic text-secondary">Book time with me! </span> 
                </RevealOnScrollSpan>
                <RevealOnScrollSpan>
                  Enter your e-mail address right here:
                </RevealOnScrollSpan>
              </p>
              <div className="w-[95%] mb-5 lg:mb-0 lg:w-[300px]">
                <RevealOnScroll>
                  <EmailInput />
                </RevealOnScroll>
              </div>
            </div>
            <div className="hidden md:block text-left">
              <div className="text-[1rem] font-asty">
                <p className="cursor-pointer hover:text-secondary"><a href="https://wa.me/16613685864" target="_blank">+1 661 368 5864</a></p>
                <p className="cursor-pointer hover:text-secondary"><a href="mailto:dragons@dotlung.com">dragons@dotlung.com</a></p>
              </div>
              <div className="flex flex-col text-lg gap-5 mt-28 font-bold font-gilroy">
                {/* {["FACEBOOK", "INSTAGRAM", "LINKEDIN", "THREADS"].map((platform) => (
                  <RevealOnScrollSpan key={platform}>
                  <a href="#" className="text-sm hover:underline font-bold font-gilroy">
                        {platform}
                  </a>
                  </RevealOnScrollSpan>
                ))} */}
                <RevealOnScrollSpan>
                <a target="_blank" href="https://www.facebook.com/dotlung.co/?ref=_xav_ig_profile_page_web" style={{fontSize:14}} className="hover:text-secondary mb-3 uppercase">
                    FACEBOOK
                  </a>
                  </RevealOnScrollSpan>
                  <RevealOnScrollSpan>
                  <a target="_blank" href="https://www.instagram.com/dotlung/?hl=en" style={{fontSize:14}} className="hover:text-secondary mb-3 uppercase">
                    INSTAGRAM
                  </a>
                  </RevealOnScrollSpan>
                  <RevealOnScrollSpan>
                  <a target="_blank" href="https://www.linkedin.com/in/dotlung/" style={{fontSize:14}} className="hover:text-secondary mb-3 uppercase">
                    LINKEDIN
                  </a>
                  </RevealOnScrollSpan>
                  <RevealOnScrollSpan>
                  <a target="_blank" href="https://www.threads.com/@dotlung" style={{fontSize:14}} className="hover:text-secondary mb-3 uppercase">
                    threads
                  </a>
                  </RevealOnScrollSpan>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="py-5 px-20 hidden lg:flex justify-between items-center w-full">
        <div className="text-xs text-indigo-200">© 2018, by Dot Lung</div>
        <div className="text-xs text-indigo-200">
          Design by <Link href="#" className="border-b border-secondary text-white hover:text-indigo-200 transition-colors">Sofia</Link>, 
          Code by <Link href="#" className="border-b border-secondary text-white hover:text-indigo-200 transition-colors">Lorenzo Bocchi</Link>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
