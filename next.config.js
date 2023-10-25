/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "d26whlelwrmtms.cloudfront.net",
    //     port: "",
    //     pathname: "/netflix/demo",
    //   },
    // ],
  },
};

module.exports = nextConfig;
