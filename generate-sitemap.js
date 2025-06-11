// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Your website URL
const BASE_URL = 'https://vkalyan.space';

// Static routes from your app
const staticRoutes = [
  '/',
  '/about',
  '/privacy-policy',
  '/disclaimer',
  '/admin/login',
  '/admin/users',
  '/admin/createblog'
];

// Example blog posts (manually list post IDs)
const blogPostIds = ['ai-ml-guide', 'react-hooks', 'cloud-basics']; // replace with your real slugs

(async () => {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  // Write sitemap to: client/public/sitemap.xml
  const writeStream = createWriteStream('./client/kalyan/public/sitemap.xml');
  sitemap.pipe(writeStream);

  // Add static routes
  staticRoutes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'monthly', priority: 0.8 });
  });

  // Add dynamic blog routes
  blogPostIds.forEach(slug => {
    sitemap.write({ url: `/kalyan/${slug}`, changefreq: 'weekly', priority: 0.9 });
  });

  sitemap.end();
  await streamToPromise(sitemap);
  console.log('✅ Sitemap generated at client/public/sitemap.xml');
})();
