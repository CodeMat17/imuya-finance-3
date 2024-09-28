import { NextResponse } from "next/server";
import { createClient } from "../../../lib/supabase/server";

export async function GET(req) {
  const supabase = await createClient();

  console.log("Starting GET request");
  try {
    // Ping the Supabase endpoint to keep it active
    await Promise.all([
      supabase.from("aguobia").select("id"),
      supabase.from("bridge").select("id"),
      supabase.from("constitution").select("id"),
      supabase.from("monthlydues").select("id"),
    ]);
      return NextResponse.json({ message: "Keeping backend awake..." });
  } catch (error) {
       return NextResponse.json({ error: error }, { status: 500 });
  }
}
