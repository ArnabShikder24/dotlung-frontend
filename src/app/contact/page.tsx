import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from "../../../public/assets/svgs/logo.svg";
import { PathNames } from '../../routes/index.route';

const EmailInput = () => {
  return (
    <div className="flex items-center border border-white px-3 py-2 w-[350px] mt-5">
      <input
        type="email"
        placeholder="Your e-mail"
        className="flex-1 bg-transparent text-white placeholder-white focus:outline-none"
      />
      <button className="text-white font-bold text-sm">LET&apos;S GO</button>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen">
      <div className="flex items-center justify-between p-4 w-full">
        <Image src={Logo} alt="Logo" width={50} />
        <Link href={PathNames.home} className="font-gilroy cursor-pointer transition-colors text-center text-sm">
          CLOSE <span className="text-secondary">X</span>
        </Link>
      </div>

      <div className="w-full flex-1 flex items-center justify-center">
        <div className="w-[50%] flex justify-between items-center">
          <div className="max-w-lg">
            <h1 className="text-6xl font-bold w-[500px]">
              LET&apos;S GROW YOUR SOCIAL MEDIA EMPIRE TOGETHER.
            </h1>
            <p className="text-lg font-caslon mt-5 w-[300px]">
              <span className="italic text-secondary">Book time with me!</span> 
              Enter your e-mail address right here:
            </p>
            <div className="w-[300px]">
              <EmailInput />
            </div>
          </div>

          <div className="text-left">
            <div className="text-lg font-caslon">
              <p>+1 661 368 5864</p>
              <p>hello@dotlung.com</p>
            </div>
            <div className="flex flex-col text-lg gap-5 space-y-3 mt-28">
              {["FACEBOOK", "INSTAGRAM", "TWITTER", "SNAPCHAT", "SKYPE"].map((platform) => (
                <a key={platform} href="#" className="text-sm hover:underline font-bold">
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 px-20 flex justify-between items-center w-full">
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
