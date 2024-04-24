import { getLocation } from "@/app/api/locations/cities";
import { NextResponse } from "next/server";

export async function GET() {
    const locations = getLocation();
    return NextResponse.json(locations);
}

