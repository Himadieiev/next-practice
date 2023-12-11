import { NextResponse } from "next/server";

import { socials } from "../data/socials";

export async function GET(req) {
  return NextResponse.json(socials);
}
