// The build embeds only public website assets; no filesystem or database is used.
export function createWorker(assets) {
  return {
    fetch(request) {
      const url = new URL(request.url);
      if (url.hostname === 'www.chadwickpoon.com' ||
          (url.hostname === 'chadwickpoon.com' && url.protocol !== 'https:')) {
        url.protocol = 'https:';
        url.hostname = 'chadwickpoon.com';
        url.port = '';
        return Response.redirect(url.href, 308);
      }
      if (!['GET', 'HEAD'].includes(request.method)) {
        return new Response(null, { status: 405, headers: { Allow: 'GET, HEAD' } });
      }
      if (url.pathname === '/index.html') {
        url.pathname = '/';
        return Response.redirect(url.href, 308);
      }
      let pathname;
      try { pathname = decodeURIComponent(url.pathname); }
      catch { return new Response(null, { status: 400 }); }
      const asset = assets.get(pathname === '/' ? '/index.html' : pathname);
      if (!asset) return new Response(request.method === 'HEAD' ? null : 'Not found', { status: 404 });
      return new Response(request.method === 'HEAD' ? null : asset.body, {
        headers: {
          'Content-Type': asset.type,
          'Cache-Control': 'public, max-age=0, must-revalidate',
          'X-Content-Type-Options': 'nosniff'
        }
      });
    }
  };
}
