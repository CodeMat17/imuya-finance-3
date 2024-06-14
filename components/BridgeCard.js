import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import dayjs from "dayjs";

const BridgeCard = ({ id, name, amount, status, created_at }) => {
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
          <AccordionTrigger className='capitalize'>{name}</AccordionTrigger>
          <AccordionContent
            className={`flex items-center justify-between ${
              status === true ? "text-green-500" : "text-red-500"
            }`}>
        
              <p>{NairaAmount.format(amount)}</p>
              <p>{status ? "Paid" : "Pledge"}</p>
              <p>{dayjs(created_at).format("MMM DD, YYYY")}</p>
       
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default BridgeCard;
