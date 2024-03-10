import BridgeCard from "@/components/BridgeCard";
import PageTitle from "@/components/PageTitle";
import { createClient } from "@/lib/supabase/server";

const BridgeRepairs = async () => {
  const supabase = createClient();

  const { data: bridge } = await supabase
    .from("bridge")
    .select("*")
    .order("created_at", { ascending: true });

  return (
    <div className='px-4 py-12'>
      <PageTitle title='Bridge repair Donations' />
      <div className='mt-12'>
        {bridge &&
          bridge.map((item) => <BridgeCard key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default BridgeRepairs;
