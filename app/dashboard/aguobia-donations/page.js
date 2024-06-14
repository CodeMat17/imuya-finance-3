import AguobiaCard from "../../../components/AguobiaCard";
import PageTitle from "../../../components/PageTitle";
import { createClient } from "../../../lib/supabase/server";

const Aguobia = async () => {
 const supabase = createClient();

  const { data: aguobia } = await supabase
    .from("aguobia")
    .select("*")
    .order("created_at", { ascending: true });

    return (
      <div className='px-4 py-12'>
            <PageTitle title='Aguobia Science Lab. Roof Renovation Donations' />
            {/* <pre>{ JSON.stringify(aguobia, null, 2)}</pre> */}
        <div className='mt-12'>
          {aguobia &&
            aguobia.map((item) => <AguobiaCard key={item.id} {...item} />)}
        </div>
      </div>
    );
};

export default Aguobia;
