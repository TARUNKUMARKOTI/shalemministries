# Deployment Guide - Fixing 404 Errors on Direct URL Access

This guide helps you fix 404 errors when accessing direct URLs (like `/about`, `/events`) after hosting your React SPA.

## The Problem

When you navigate directly to a route like `yourdomain.com/about`, the server looks for a file at that path. Since this is a Single Page Application (SPA), all routes should serve the `index.html` file, which then handles routing on the client side.

## Solution by Hosting Provider

### Netlify
The `public/_redirects` file is automatically used. No additional configuration needed.

### Vercel
The `vercel.json` file is automatically used. No additional configuration needed.

### Apache (cPanel, shared hosting)
1. Upload the `.htaccess` file to your public_html or www directory
2. Make sure mod_rewrite is enabled on your server

### Nginx
1. Copy the `nginx.conf` configuration to your server
2. Or add this to your existing nginx configuration:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### GitHub Pages
Create a `404.html` file that redirects to `index.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
      location.replace('/index.html');
    </script>
  </head>
  <body></body>
</html>
```

### Other Hosting Providers
Contact your hosting provider's support and ask them to configure:
- All routes should serve `index.html`
- Or configure a catch-all route that serves `index.html` for all non-file requests

## Build and Deploy

1. Build your project:
```bash
npm run build
```

2. Deploy the `dist` folder contents to your hosting provider

3. Make sure the appropriate configuration file is in place based on your hosting provider

## Testing

After deployment, test these URLs:
- `yourdomain.com/`
- `yourdomain.com/about`
- `yourdomain.com/events`
- `yourdomain.com/ministries`
- `yourdomain.com/giving`

All should work without 404 errors.



