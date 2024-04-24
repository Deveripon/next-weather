import { NextResponse } from "next/server";
import { getLocationByName } from "../cities";
export async function GET(request, { params: { locationName } }) {
    const location = getLocationByName(locationName);
    return NextResponse.json(location);
}

