/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "book-ye.com.ua",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "static.yakaboo.ua",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "i.gr-assets.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};
export default nextConfig;
