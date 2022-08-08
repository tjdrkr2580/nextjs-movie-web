/** @type {import('next').NextConfig} */
const API_KEY = "94728d9d3895c91dc799bfaa01c45029";

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [{
      source: "/old-blog/:path*",
      destination: "/new-sexy-blog/:path*",
      permanent: false,
  }]
  },
  async rewrites() {
    return [{
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    },{
      source: "/api/movies/:id",
      destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
    }]
  }
}
module.exports = nextConfig
