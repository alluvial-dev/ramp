import { NextResponse } from 'next/server';
 
export const runtime = 'edge'; // 'nodejs' is the default
 
export function GET(request) {
  return NextResponse.json(
    {
      body: request.body,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    },
  );
}
