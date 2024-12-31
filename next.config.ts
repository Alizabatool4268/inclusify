import type { NextConfig } from "next";
import { hostname } from "node:os";


const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        hostname:"cdn.sanity.io"
      }
    ]
  }
};

export default nextConfig;
