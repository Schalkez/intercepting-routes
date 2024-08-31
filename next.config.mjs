/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "buffer.com",
      },
      {
        protocol: "https",
        hostname: "img-cdn.pixlr.com",
      },
      {
        protocol: "https",
        hostname: "www.simplilearn.com",
      },
      {
        protocol: "https",
        hostname: "h5p.org",
      },
    ],
  },
};

export default nextConfig;
