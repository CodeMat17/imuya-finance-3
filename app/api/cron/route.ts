import { createClient } from '../../../lib/supabase/server'
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const supabase = await createClient()
    
    try {
            const { data, error } = await supabase
              .from("monthlydues")
            .select("*").limit(1);
        
        if (error) {
          throw error;
        }

          return NextResponse.json({ data });

    } catch (error: any) {
            return NextResponse.json({ error: error.message }, { status: 500 });

    }
    
  return new Response("Hello from Cron!");
}
                             