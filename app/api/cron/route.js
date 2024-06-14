import { NextResponse } from "next/server";
import { createClient } from "../../../lib/supabase/server";

export async function GET(req) {
  const supabase = await createClient();

  try {
    // Ping the Supabase endpoint to keep it active
    const { data, error } = await supabase
      .from("monthlydues")
      .select("*")
      .limit(1);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ users: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error).message },
      { status: 500 }
    );
  }
}
