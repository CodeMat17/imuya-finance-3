import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";
import { Button } from "./ui/button";


const MonthlyDuesCard = ({
  name,
  months_2022,
  amount_2022,
  months_2023,
  amount_2023,
  months_2024,
  amount_2024,
  months_2025,
  amount_2025,
  months_2026,
  amount_2026,
}) => {
  const NairaAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className='py-2 w-full max-w-md mx-auto'>
      {/* ============= */}
      <Drawer>
        <DrawerTrigger className="uppercase">{name}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className='text-center'>
             <span className="uppercase">{name}</span> paid for:</DrawerTitle>
            <DrawerDescription>
              <div className="pt-4 w-full max-w-md mx-auto">
                <p
                  className={`flex justify-between w-full gap-3 border-b py-1 ${
                    months_2022 === "12" ? "text-green-500" : "text-gray-500"
                  }`}>
                  <p className='flex items-center gap-2'>2022</p>
                  <p className='flex'>
                    {months_2022 ? months_2022 : "0"} month
                    <span className={amount_2022 === null ? "hidden" : "flex"}>
                      s
                    </span>
                  </p>

                  <p>
                    {amount_2022
                      ? NairaAmount.format(parseInt(amount_2022))
                      : "-----"}
                  </p>
                </p>
                {/* =====2023===== */}
                <div
                  className={`flex justify-between w-full gap-3 border-b py-1 ${
                    months_2023 === "12" ? "text-green-500" : "text-gray-500"
                  }`}>
                  <p className='flex items-center gap-2'>2023</p>
                  <p className='flex'>
                    {months_2023 ? months_2023 : "0"} month
                    <span className={amount_2023 === null ? "hidden" : "flex"}>
                      s
                    </span>
                  </p>
                  <p>
                    {amount_2023
                      ? NairaAmount.format(parseInt(amount_2023))
                      : "-----"}
                  </p>
                </div>
                {/* =====2024===== */}
                <p
                  className={`flex justify-between w-full gap-3 border-b py-1 ${
                    months_2024 === "12" ? "text-green-500" : "text-gray-500"
                  }`}>
                  <p className='flex items-center gap-2'>2024</p>
                  <p className='flex'>
                    {months_2024 ? months_2024 : " 0"} month
                    <span className={amount_2024 === null ? "hidden" : "block"}>
                      s
                    </span>
                  </p>
                  <p>
                    {amount_2024
                      ? NairaAmount.format(parseInt(amount_2024))
                      : "-----"}
                  </p>
                </p>
                {/* =====2025===== */}
                <div
                  className={`flex justify-between w-full gap-3 border-b py-1  ${
                    months_2025 === "12" ? "text-green-500" : "text-gray-500"
                  }`}>
                  <p className='flex items-center gap-2'>2025 </p>
                  <p className='flex'>
                    {months_2025 ? months_2025 : "0"} month
                    <span className={amount_2025 === null ? "hidden" : "flex"}>
                      s
                    </span>
                  </p>
                  <p>
                    {amount_2025
                      ? NairaAmount.format(parseInt(amount_2025))
                      : "-----"}
                  </p>
                </div>
                {/* =====2026===== */}
                <p
                  className={`flex justify-between w-full gap-3 border-b py-1 ${
                    months_2026 === "12" ? "text-green-500" : "text-gray-500"
                  }`}>
                  <p className='flex items-center gap-2'>2026</p>
                  <p className='flex'>
                    {months_2026 ? months_2026 : "0"} month
                    <span className={amount_2026 === null ? "hidden" : "flex"}>
                      s
                    </span>
                  </p>
                  <p>
                    {amount_2026
                      ? NairaAmount.format(parseInt(amount_2026))
                      : "-----"}
                  </p>
                </p>
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            {/* <Button>Submit</Button> */}
            <DrawerClose>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MonthlyDuesCard;
