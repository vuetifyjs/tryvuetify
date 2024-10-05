// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// Utilities
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: { configFile: 'src/styles/settings.scss' },
    }),
    {
      name: 'inject-umami',
      transformIndexHtml (html, ctx) {
        if (!ctx.bundle) return

        return [{
          tag: 'script',
          attrs: {
            defer: true,
            src: 'https://umami.vuetifyjs.com/script.js',
            'data-website-id': '7764764c-e55f-4bda-80f4-6e66f078b63e',
          },
          injectTo: 'head',
        }]
      },
    },
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
