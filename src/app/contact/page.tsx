"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from "../../../public/assets/svgs/logo.svg";
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const EmailInput = () => {
  return (
    <div className="flex items-center border border-white px-3 py-2 w-[100%] lg:w-[350px] mt-5 relative">
      <input
        type="email"
        placeholder="Your email"
        className="flex-1 bg-transparent font-gilroy placeholder-[#ffffff33] focus:outline-none"
      />
      <button className="text-[#ffffff33] font-gilroy text-[0.75rem] hover:text-secondary">LET&apos;S GO</button>
      <ArrowRight size={18} className="mr-2 text-secondary absolute -right-5" />
    </div>
  );
};

const Contact = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen border-secondary border-[10px] lg:border-[50px]">
      <div className="flex items-center justify-between p-4 w-full">
        <Image onClick={() => router.push("/")} src={Logo} alt="Logo" width={50} />
        <p onClick={() => router.back()} className="font-gilroy cursor-pointer transition-colors text-center text-sm">
          CLOSE <span className="text-secondary">X</span>
        </p>
      </div>

      <div className="w-full flex-1 flex items-center justify-center">
        <div className="lg:w-[50%] lg:flex justify-start items-start px-5 lg:px-0 py-10 lg:py-0">
          <div className="max-w-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-gilroy lg:w-[500px]">
              LET&apos;S GROW YOUR SOCIAL MEDIA EMPIRE TOGETHER.
            </h1>
            <div className="text-left md:hidden">
              <div className="text-lg font-caslon mt-10">
                <p>+1 661 368 5864</p>
                <p>hello@dotlung.com</p>
              </div>
              <div className="flex flex-col text-lg gap-5 my-10">
                {["FACEBOOK", "INSTAGRAM", "LINKEDIN", "MESSENGER"].map((platform) => (
                  <a key={platform} href="#" className="text-sm hover:underline font-bold font-gilroy">
                    {platform}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-lg font-caslon mt-5 lg:w-[300px]">
                <span className="italic text-secondary">Book time with me! </span> 
                Enter your e-mail address right here:
              </p>
              <div className="w-[95%] mb-5 lg:mb-0 lg:w-[300px]">
                <EmailInput />
              </div>
            </div>
          </div>

          <div>
            <div className="md:hidden">
              <p className="text-lg font-caslon mt-5 lg:w-[300px]">
                <span className="italic text-secondary">Book time with me! </span> 
                Enter your e-mail address right here:
              </p>
              <div className="w-[95%] mb-5 lg:mb-0 lg:w-[300px]">
                <EmailInput />
              </div>
            </div>
            <div className="hidden md:block text-left">
              <div className="text-lg font-caslon">
                <p>+1 661 368 5864</p>
                <p>hello@dotlung.com</p>
              </div>
              <div className="flex flex-col text-lg gap-5 mt-28">
                {["FACEBOOK", "INSTAGRAM", "LINKEDIN", "MESSENGER"].map((platform) => (
                  <a key={platform} href="#" className="text-sm hover:underline font-bold font-gilroy">
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 px-20 hidden lg:flex justify-between items-center w-full">
        <div className="text-xs text-indigo-200">© 2018, by Dot Lang</div>
        <div className="text-xs text-indigo-200">
          Design by <Link href="#" className="border-b border-secondary text-white hover:text-indigo-200 transition-colors">Sofia</Link>, 
          Code by <Link href="#" className="border-b border-secondary text-white hover:text-indigo-200 transition-colors">Lorenzo Bocchi</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
