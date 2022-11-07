import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { nextUrl: url, geo, ip } = req;
  const country = geo?.country ?? 'US';
  const city = geo?.city ?? 'San Francisco';
  const region = geo?.region ?? 'CA';
  const originIP = ip ?? '0.0.0.0';

  url.searchParams.set('country', country);
  url.searchParams.set('city', city);
  url.searchParams.set('region', region);
  url.searchParams.set('origin-ip', originIP);

  return NextResponse.rewrite(url);
}
