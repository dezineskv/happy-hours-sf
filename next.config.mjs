// ...existing code...
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    // allow specific hostnames (simple)
    domains: ["images.example.com", "cdn.another.com"],

    // or use remotePatterns for fine-grained control
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // "**" to match any subdomain/hostname
      },
    ],
  },
};

export default nextConfig;
