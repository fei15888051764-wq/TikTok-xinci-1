export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  if (url.hostname === 'tiktok-xinci-1.pages.dev') {
    url.hostname = 'tokslangdict.com';
    return Response.redirect(url.toString(), 301);
  }
  
  return context.next();
}
