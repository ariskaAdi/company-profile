import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { POST_QUERY } from "@/sanity/lib/queries";

export async function GET() {
  try {
    const data = await client.fetch(POST_QUERY);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Failed to fetch posts",
    });
  }
}
