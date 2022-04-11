/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = {
  images: {
    domains: ["jherr-pokemon.s3.us-west-1.amazonaws.com"],
  },
};
