import MonthlyDuesCard from "@/components/MonthlyDuesCard";
import PageTitle from "@/components/PageTitle";
import { createClient } from "@/lib/supabase/server";
import { LoaderCircle } from "lucide-react";

const MonthlyDues = async () => {
  const supabase = createClient();

  const { data: dues } = await supabase
    .from("monthlydues")
    .select("*")
    .order("name", { ascending: true });

  return (
    <div className='py-8 px-4'>
      <PageTitle title='Monthly Dues Register' />
          {/* <pre>{ JSON.stringify(dues, null, 2)}</pre> */}
         
      <div className='flex flex-col mt-12'>
        {dues && dues.map((due) => <MonthlyDuesCard key={due.id} {...due} />)}
      </div>
    </div>
  );
};

export default MonthlyDues;
