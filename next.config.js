/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // allow all domains
        domains: ["img5a.flixcart.com", "img6a.flixcart.com"],
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

