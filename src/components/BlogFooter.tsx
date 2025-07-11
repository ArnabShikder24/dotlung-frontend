import Link from 'next/link';
import NavigationArrow from './NavigationArrow';
import RippleButton from './RippleButton';
import RevealOnScrollSpan from './RevealOnScrollSpan';
import RevealOnScroll from './RevealOnScroll';

interface FooterProps {
  relatedLinks?: {
    firstColumn: { title: string; content: string };
    secondColumn: { title: string; url: string }[];
    thirdColumn: { title: string; url: string }[];
  };
}

const BlogFooter: React.FC<FooterProps> = ({ 
  relatedLinks = {
    firstColumn: { title: 'RELATED LINKS', content: '' },
    secondColumn: [],
    thirdColumn: []
  }
}) => {
  return (
    <div className="w-full text-white py-8">
      {/* Related Links Section - Only show if there are related links */}
      {relatedLinks && (relatedLinks.secondColumn.length > 0 || relatedLinks.thirdColumn.length > 0) && (
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-gilroy text-[.625rem] md:text-[0.75rem] text-secondary mb-4">
                {relatedLinks.firstColumn.title}
              </h3>
            </div>
            
            <div className="space-y-2">
              {relatedLinks.secondColumn.map((link, index) => (
                <Link 
                key={index} 
                href={link.url}
                className="block font-gilroy text-[.625rem] md:text-[0.75rem] hover:text-secondary transition-colors"
                >
                  <RevealOnScrollSpan>
                    {link.title}
                  </RevealOnScrollSpan>
                </Link>
              ))}
            </div>
            
            <div className="space-y-2">
              {relatedLinks.thirdColumn.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.url}
                  className="block font-gilroy text-[.625rem] md:text-[0.75rem] hover:text-secondary transition-colors"
                >
                <RevealOnScrollSpan>
                  {link.title}
                </RevealOnScrollSpan>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Divider */}
      <div className="border-t border-secondary my-8 mx-4 md:mx-8"></div>
      
      {/* Social Media Sharing Section */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <RevealOnScroll>
              <h3 className="font-gilroy text-[.625rem] md:text-[0.75rem] text-secondary">SHARE</h3>
            </RevealOnScroll>
          </div>
          
          <div className="space-y-2 font-gilroy text-[.625rem] md:text-[0.75rem]">
            {/* {['FACEBOOK', 'INSTAGRAM', 'LINKEDIN'].map((platform, index) => (
              <Link 
                key={index} 
                href={`#share-${platform.toLowerCase()}`}
                className="block text-sm hover:text-secondary transition-colors"
              >
                <RevealOnScrollSpan>
                  {platform}
                </RevealOnScrollSpan>
              </Link>
            ))} */}
            <RevealOnScroll>
              <a target="_blank" href="https://www.facebook.com/dotlung.co/?ref=_xav_ig_profile_page_web" style={{fontSize:14}} className="hover:text-secondary mb-3 uppercase text-[0.75rem]">
                  FACEBOOK
              </a>
            </RevealOnScroll>
            <RevealOnScroll>
              <a target="_blank" href="https://www.instagram.com/dotlung/?hl=en" style={{fontSize:14}} className="hover:text-secondary mb-3 uppercase text-[0.75rem]">
                INSTAGRAM
              </a>
            </RevealOnScroll>
            <RevealOnScroll>
              <a target="_blank" href="https://www.linkedin.com/in/dotlung/" style={{fontSize:14}} className="hover:text-secondary mb-3 uppercase text-[0.75rem]">
                LINKEDIN
              </a>
            </RevealOnScroll>
            <RevealOnScroll>
              <a target="_blank" href="https://www.threads.com/@dotlung" style={{fontSize:14}} className="hover:text-secondary mb-3 uppercase text-[0.75rem]">
                threads
              </a>
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll>
            <div className="flex justify-end items-start">
              <RippleButton
                href="/blog"
                className="flex items-center text-sm hover:text-secondary transition-colors"
              >
                <NavigationArrow direction="left" className="mr-2 text-secondary" />
                <p className="font-gilroy text-[.625rem] md:text-[0.75rem] cursor-pointer hover:text-secondary">BACK TO BLOG</p>
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