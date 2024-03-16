/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/coffee",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
