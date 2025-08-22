import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log('[Web Vitals]', data);
  return new Response(null, { status: 200 });
}
