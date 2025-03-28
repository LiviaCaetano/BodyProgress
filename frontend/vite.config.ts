import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: "generateSW",
      "srcDir": "",
      devOptions: { enabled: true },
      filename: "sw.js",
      includeAssets: ["**/*.{png}"],
      manifest: {
        id: '/',
        scope: '/',
        start_url: '/',
        name: 'BodyProgress',
        short_name: 'BodyProgress',
        description: 'BodyProgress',
        theme_color: '#1E88E5',
        background_color: '#1E88E5',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            "src": "icons/png-48x48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "icons/png-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "icons/png-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "icons/png-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "icons/png-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "icons/png-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "icons/png-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "icons/png-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "icons/png-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "icons/png-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    })
  ],
  server: {
    open: true,
    port: 3000,
    host: '0.0.0.0'
  },
})
