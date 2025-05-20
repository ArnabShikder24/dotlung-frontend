import RevealOnScroll from "./RevealOnScroll";

const AccordionItem = ({ item, isActive, onToggle }) => {
  return (
    <RevealOnScroll className="my-4">
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
          isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base font-light pr-12 font-asty">{item.content}</p>
      </div>
    </RevealOnScroll>
  );
};

export default AccordionItem;