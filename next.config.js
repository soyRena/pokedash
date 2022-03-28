/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true
}

const withImages = require('next-images')

module.exports = (nextConfig, withImages({ esModule: true }))