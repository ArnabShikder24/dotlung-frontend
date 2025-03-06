import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface FooterProps {
  relatedLinks?: {
    title: string;
    url: string;
  }[];
}

const BlogFooter: React.FC<FooterProps> = ({ 
  relatedLinks = [
    { title: 'WWW.OFF.ES', url: '#' },
    { title: 'WWW.LOREMIPSUMSEDUTPERSPICIA.COM', url: '#' },
    { title: 'WWW.OFFINSTAGRAM.ES', url: '#' },
    { title: 'WWW.LOREMIPSUMSEDUTFEA.COM', url: '#' },
    { title: 'WWW.OFFFACEBOOK.ES', url: '#' },
    { title: 'WWW.OFFINSTAGRAM.CO.UK', url: '#' },
  ]
}) => {
  return (
    <div className="w-full text-white py-8">
      {/* Related Links Section */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium text-orange-500 mb-4">RELATED LINKS</h3>
          </div>
          
          <div className="space-y-2">
            {relatedLinks.slice(0, 3).map((link, index) => (
              <Link 
                key={index} 
                href={link.url}
                className="block text-sm hover:text-secondary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
          
          <div className="space-y-2">
            {relatedLinks.slice(3).map((link, index) => (
              <Link 
                key={index + 3} 
                href={link.url}
                className="block text-sm hover:text-secondary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="border-t border-purple-600 my-8 mx-4 md:mx-8"></div>
      
      {/* Social Media Sharing Section */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium text-orange-500">SHARE</h3>
          </div>
          
          <div className="space-y-2">
            {['FACEBOOK', 'INSTAGRAM', 'TWITTER', 'SNAPCHAT', 'SKYPE'].map((platform, index) => (
              <Link 
                key={index} 
                href={`#share-${platform.toLowerCase()}`}
                className="block text-sm hover:text-secondary transition-colors"
              >
                {platform}
              </Link>
            ))}
          </div>
          
          <div className="flex justify-end items-start">
            <Link 
              href="/blog"
              className="flex items-center text-sm hover:text-secondary transition-colors"
            >
              <ArrowLeft size={16} className="mr-2 text-orange-500" />
              BACK TO BLOG
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Divider */}
      <div className="border-t border-purple-600 mt-8 mx-4 md:mx-8"></div>
    </div>
  );
};

export default BlogFooter;