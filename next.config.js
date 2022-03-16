process.env.NEXT_PUBLIC_API_URL = 'http://localhost:3000';

if (process.env.VERCEL_URL) {
  process.env.NEXT_PUBLIC_API_URL = `https://${process.env.VERCEL_URL}`;
}

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
};
