/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '8000', // pastikan port sesuai dengan yang digunakan
            pathname: '/storage/product/**', // mencocokkan path gambar
          },
        ],
      },
};

export default nextConfig;
