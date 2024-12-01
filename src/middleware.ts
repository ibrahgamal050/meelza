import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')
  const path = request.nextUrl.pathname
  
  // Handle meelza.com and its subdomains
  if (hostname?.includes('meelza.com')) {
    // Extract subdomain if it exists
    const subdomain = hostname.replace('.meelza.com', '').replace('meelza.com', '')
    
    // Build the destination URL
    const destinationHost = subdomain 
      ? `${subdomain}.meelza.site`
      : 'meelza.site'
      
    const destinationUrl = `https://${destinationHost}${path}${request.nextUrl.search}`
    
    return NextResponse.redirect(destinationUrl, {
      status: 308
    })
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
}

