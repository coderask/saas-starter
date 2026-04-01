import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    clientSegmentCache: true
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy-Report-Only',
            value: "default-src 'self'; script-src 'self' https://proxy.csidetm.com; connect-src 'self' https://proxy.csidetm.com; report-uri https://proxy.csidetm.com/csp; report-to csp-endpoint;"
          },
          {
            key: 'Reporting-Endpoints',
            value: 'csp-endpoint="https://proxy.csidetm.com/csp"'
          },
          {
            key: 'Report-To',
            value: '{"group":"csp-endpoint","max_age":10886400,"endpoints":[{"url":"https://proxy.csidetm.com/csp"}]}'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
