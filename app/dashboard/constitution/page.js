import ConstitutionCard from "@/components/ConstitutionCard";
import PageTitle from "@/components/PageTitle";
import { createClient } from "@/lib/supabase/server";

const Constitution = async () => {
  const supabase = createClient();

  const { data: items } = await supabase
    .from("constitution")
    .select("*")
    .order("amount", { ascending: false });

  return (
    <div className='px-4 py-12'>
      <PageTitle title='Constitution Launching' />
      <div className='mt-12'>
        {items &&
          items.map((item) => <ConstitutionCard key={item.id} {...item} />)}
        {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export default Constitution;
