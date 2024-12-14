/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.learningroutes.in',
                // port: '', // Optional, leave empty if not using a specific port
                // pathname: '//', // Allow all paths from this hostname
            },
        ],
    },
};

export default nextConfig;
