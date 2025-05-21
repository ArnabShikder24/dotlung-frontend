import Link from 'next/link';
import NavigationArrow from './NavigationArrow';
import RippleButton from './RippleButton';
import RevealOnScrollSpan from './RevealOnScrollSpan';
import RevealOnScroll from './RevealOnScroll';

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
            <h3 className="font-gilroy text-[.625rem] md:text-[0.85rem] text-secondary mb-4">RELATED LINKS</h3>
          </div>
          
          <div className="space-y-2">
            {relatedLinks.slice(0, 3).map((link, index) => (
              <Link 
              key={index} 
              href={link.url}
              className="block font-gilroy text-[.625rem] md:text-[0.85rem] hover:text-secondary transition-colors"
              >
                <RevealOnScrollSpan>
                  {link.title}
                </RevealOnScrollSpan>
              </Link>
            ))}
          </div>
          
          <div className="space-y-2">
            {relatedLinks.slice(3).map((link, index) => (
              <Link 
                key={index + 3} 
                href={link.url}
                className="block font-gilroy text-[.625rem] md:text-[0.85rem] hover:text-secondary transition-colors"
              >
              <RevealOnScrollSpan>
                {link.title}
              </RevealOnScrollSpan>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="border-t border-secondary my-8 mx-4 md:mx-8"></div>
      
      {/* Social Media Sharing Section */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <RevealOnScroll>
              <h3 className="font-gilroy text-[.625rem] md:text-[0.85rem] text-secondary">SHARE</h3>
            </RevealOnScroll>
          </div>
          
          <div className="space-y-2 font-gilroy text-[.625rem] md:text-[0.85rem]">
            {['FACEBOOK', 'INSTAGRAM', 'LINKEDIN'].map((platform, index) => (
              <Link 
                key={index} 
                href={`#share-${platform.toLowerCase()}`}
                className="block text-sm hover:text-secondary transition-colors"
              >
                <RevealOnScrollSpan>
                  {platform}
                </RevealOnScrollSpan>
              </Link>
            ))}
          </div>
          
          <RevealOnScroll>
            <div className="flex justify-end items-start">
              <RippleButton
                href="/blog"
                className="flex items-center text-sm hover:text-secondary transition-colors"
              >
                <NavigationArrow direction="left" className="mr-2 text-secondary" />
                <p className="font-gilroy text-[.625rem] md:text-[0.85rem] cursor-pointer hover:text-secondary">BACK TO BLOG</p>
              </RippleButton>
            </div>
          </RevealOnScroll>
        </div>
      </div>
      
      {/* Bottom Divider */}
      <RevealOnScroll>
      <div className="border-t border-secondary mt-8 mx-4 md:mx-8"></div>
      </RevealOnScroll>
    </div>
  );
};

export default BlogFooter;