/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.wikimedia.org" },
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "**.imgbb.com" },
    ],
  },
};
export default nextConfig;
