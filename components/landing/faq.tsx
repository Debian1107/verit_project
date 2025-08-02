import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4 ">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="bg-gray-100 p-4 rounded-2xl shadow-sm border"
            >
              <AccordionTrigger className="text-lg font-medium text-left hover:no-underline flex justify-between items-center w-full">
                <span>{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
