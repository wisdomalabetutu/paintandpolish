import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you work with my insurance?",
    answer:
      "Yes, we work with ALL insurance companies to streamline the process. Our experienced team handles the paperwork and communication with your insurance provider, so you can focus on getting back on the road.",
  },
  {
    question: "Do I have to use the shop my insurance recommends?",
    answer:
      "No! In Oregon, you have the legal right to choose any repair shop you prefer. Don't let your insurance company pressure you into using a specific shop—you're in control of where your vehicle gets repaired.",
  },
  {
    question: "Is there a warranty?",
    answer:
      "Yes, we offer a lifetime warranty on workmanship for as long as you own the vehicle. We stand behind the quality of our repairs and want you to have complete peace of mind.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes, absolutely! We provide free, no-obligation estimates for all repair work. Simply bring your vehicle in or contact us to schedule a convenient time.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Common Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers. Here are some of the most common
              questions we receive from our customers.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border-0 shadow-soft px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;