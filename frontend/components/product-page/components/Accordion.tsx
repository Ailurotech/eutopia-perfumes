import { useState } from "react";
import { PortableText } from "@portabletext/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface AccordionItemProps {
  title: string;
  content: any[];
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-6 flex justify-between items-center hover:bg-gray-50 focus:outline-none"
        onClick={onClick}
      >
        <span className="font-medium text-left">{title}</span>
        <ChevronDownIcon
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-6 bg-gray-50">
          <PortableText
            value={content}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="mb-4 last:mb-0">{children}</p>
                ),
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: {
    title: string;
    content: any[];
  }[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
