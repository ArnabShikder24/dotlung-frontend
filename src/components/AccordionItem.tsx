import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

const AccordionItem = ({ item, isActive, onToggle }) => {
  return (
    <RevealOnScroll className="my-4 relative">
      <div className="relative" onClick={onToggle}>
        <span className="block pb-2 cursor-pointer lg:hover:text-secondary font-caslon">
          {item.title}
        </span>
        <div
          className="border-b-[1px] border-secondary absolute top-4"
          style={{
            width: item.width,
          }}
        ></div>
      </div>
      {/* Accordion content */}
      <div 
        className={`overflow-hidden transition-all duration-500 ${
          isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base font-light pr-12 font-asty">{item.content}</p>
        {
          item?.links && item.links.length > 0 && (
            <>
              <div className="font-gilroy text-[0.875rem] pt-2 uppercase leading-6 md:hidden">
                <p className="text-secondary mb-1">Related links</p>
                {
                  item.links.map((link, index) => (
                    <Link key={index} href={link?.url} target="_blank" className="cursor-pointer hover:text-secondary block mb-1">
                      {link?.title}
                    </Link>
                  ))
                }
              </div>
              <div className="font-gilroy text-[0.875rem] uppercase leading-6 hidden md:block absolute -left-[240px] top-[39px]">
                <p className="cursor-pointer text-secondary mb-1">Related links</p>
                {
                  item.links.map((link, index) => (
                    <Link key={index} href={link?.url} target="_blank" className="cursor-pointer hover:text-secondary block mb-1">
                      {link?.title}
                    </Link>
                  ))
                }
              </div>
            </>
          )
        }
      </div>
    </RevealOnScroll>
  );
};

export default AccordionItem;