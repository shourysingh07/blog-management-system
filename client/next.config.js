/** @type {import('next').NextConfig} */
const nextConfig = {
    // add hostname to images
    images: {
        domains: ['cdn-icons-png.flaticon.com','example.com','unsplash.com','plus.unsplash.com','images.unsplash.com','media.istockphoto.com','firebasestorage.googleapis.com'],
    },
}

module.exports = nextConfig
