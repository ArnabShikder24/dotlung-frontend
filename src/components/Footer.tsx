import Image from 'next/image';
import React from 'react';
import model1 from "../assets/images/SM_3_final copia.png";

const Footer = () => {
  return (
    <footer className="w-full p-4 font-gilroy mt-5 relative">
      <Image src={model1} alt='' width={280} className="absolute bottom-10 right-10 opacity-[1]" />
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
    </footer>
  );
};

export default Footer;