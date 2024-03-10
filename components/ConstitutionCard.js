import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ConstitutionCard = ({ id, name, amount, status }) => {
  const NairaAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className='w-full max-w-md mx-auto'>
      <Accordion type='single' collapsible>
        <AccordionItem value={id}>
          <AccordionTrigger>{name}</AccordionTrigger>
          <AccordionContent
            className={`flex items-center justify-between ${
              status === "Paid" ? "text-green-500" : "text-red-500"
            }`}>
            <p>{NairaAmount.format(amount)}</p>
            <p>{status}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ConstitutionCard;
