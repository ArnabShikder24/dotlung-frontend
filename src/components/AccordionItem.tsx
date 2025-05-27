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
          isActive ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base font-light pr-12 font-asty">{item.content}</p>
        <div className="font-gilroy text-secondary text-[0.875rem] pt-2 uppercase leading-6 md:hidden">
          <p>Related links</p>
          <p>WEBSITE</p>
          <p>FACEBOOK</p>
        </div>
        <div className="font-gilroy text-secondary text-[0.875rem] uppercase leading-6 hidden md:block absolute -left-[240px] top-[39px]">
          <p>Related links</p>
          <p>WEBSITE</p>
          <p>FACEBOOK</p>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default AccordionItem;