/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.com'], // ✅ ALLOW this domain only (not i.ibb.co.com!)
  },
};

export default nextConfig;
