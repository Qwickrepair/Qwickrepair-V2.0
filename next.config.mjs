/** @type {import('next').NextConfig} */
const privateLanOrigins = [
  "10.*.*.*",
  "192.168.*.*",
  ...Array.from({ length: 16 }, (_, index) => `172.${16 + index}.*.*`),
];

const nextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["localhost", "127.0.0.1", ...privateLanOrigins],
};

export default nextConfig;
