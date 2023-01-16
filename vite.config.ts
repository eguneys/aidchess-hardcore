import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  plugins: [
    VitePWA({ registerType: 'autoUpdate' }),
    solidPlugin({ hot : false }) 
  ]
})
