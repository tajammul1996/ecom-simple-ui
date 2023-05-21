/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // allow all domains
        domains: ["*"],
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
