const path = require('path')
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true, 
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      }, 
}

module.exports = withContentlayer(nextConfig)