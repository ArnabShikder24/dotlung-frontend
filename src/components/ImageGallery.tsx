import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface GalleryProps {
  images: {
    src: StaticImageData;
    alt: string;
  }[];
}

const ImageGallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="w-full min-h-screen p-4 md:p-8 lg:p-12">
      <div className="relative max-w-7xl mx-auto h-[80vh] md:h-[90vh]">
        {/* Custom absolute positioning to match the exact layout in the image */}
        
        {/* Top left image - person with unicorn headband */}
        <div className="absolute left-20 top-0 w-[45%] h-[45%] md:w-[35%] md:h-[45%] rounded-md overflow-hidden shadow-lg">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Top right image - city view with bridge */}
        <div className="absolute right-36 top-[15%] w-[45%] h-[55%] md:w-[30%] md:h-[75%] rounded-md overflow-hidden shadow-lg">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Bottom left image - two friends */}
        <div className="absolute left-20 bottom-0 w-[45%] h-[45%] md:w-[35%] md:h-[45%] rounded-md overflow-hidden shadow-lg">
          <Image
            src={images[2].src}
            alt={images[2].alt}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Purple blob decorations like in the reference image */}
        <div className="absolute top-[15%] left-[5%] w-12 h-12 rounded-full bg-purple-500 opacity-20 blur-xl"></div>
        <div className="absolute bottom-[15%] right-[5%] w-16 h-16 rounded-full bg-purple-500 opacity-20 blur-xl"></div>
      </div>
    </div>
  );
};

export default ImageGallery;