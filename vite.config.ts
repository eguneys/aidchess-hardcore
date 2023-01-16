import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  plugins: [
    /*
    VitePWA({ 
      devOptions: {
        enabled: false
      },
      registerType: 'autoUpdate', 
      manifest: {
      name: 'Aidchess',
      short_name: 'Aidchess',
      description: 'Aidchess Hardcore Chess',
      theme_color: '#ffffff',
      icons: [{
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }]
    } }),
   */
    solidPlugin({ hot : false }) 
  ]
})
