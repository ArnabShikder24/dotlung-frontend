'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FeaturedSection() {
  return (
    <div className="relative w-full h-screen bg-[#5603ad] flex items-center justify-center text-white p-8">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-60">
        <Image 
          src="/your-image-path.jpg" 
          alt="Background"
          layout="fill" 
          objectFit="cover" 
          className="" 
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <p className="text-sm text-gray-300">13.01.2018</p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mt-2"
        >
          <span className="bg-red-400 text-white px-2 py-1">Ladies, Wine, Barcelona.</span>
          <span className="bg-gray-200 text-gray-900 px-2 py-1"> But not on their own.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-gray-200 bg-gray-700 inline-block p-2"
        >
          I create strong online identities & communities and develop kickass.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-sm underline"
        >
          READ MORE
        </motion.button>
      </div>
    </div>
  );
}
