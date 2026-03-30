/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        search: "?v=*",
      },
      {
        pathname: "/images/**",
      },
    ],
  },
}

export default nextConfig
