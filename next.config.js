/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["https://jherr-pokemon.s3.us-west-1.amazonaws.com/"],
  },
};
