/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    api: {
        bodyParser: {
          sizeLimit: '1mb',
        },
        externalResolver: true,
        timeout: 30000, // Set the timeout to 30 seconds (in milliseconds)
    },
}

module.exports = nextConfig
