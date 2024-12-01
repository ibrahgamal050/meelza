import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only redirect for the homepage
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('https://your-target-url.com', request.url), {
      status: 301
    })
  }
}

export const config = {
  matcher: '/'
}

