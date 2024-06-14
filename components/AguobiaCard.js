import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import dayjs from "dayjs";

const AguobiaCard = ({ id, created_at, name, donated, status }) => {
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
          
              <p>{NairaAmount.format(parseInt(donated))}</p>
              <p>{status}</p>
              <p>{dayjs(created_at).format("MMM DD, YYYY")}</p>
          
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AguobiaCard;
