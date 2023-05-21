/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // allow all domains
        domains: ["img5a.flixcart.com", "img6a.flixcart.com"],
        remotePatterns: [{
            protocol: 'http',
            hostname: "**",
            pathname: "/**",
        }]
    },
    redirects: async () => {
        return [
            {
                source: "/",
                destination: "/products",
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig

