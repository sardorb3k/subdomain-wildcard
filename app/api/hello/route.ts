import { headers } from "next/headers";

export async function GET(request: Request) {
  const headersList = headers();
  const referer = headersList.get('x-subdomain');
  return new Response(`Subdomain: ${referer}`)
}
