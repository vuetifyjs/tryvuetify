import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import Fonts from 'unplugin-fonts/vite'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: { configFile: 'src/styles/settings.scss' },
    }),
    Fonts({
      fontsource: {
        families: [
          {
            name: 'Roboto',
            weights: [100, 300, 400, 500, 700, 900],
            styles: ['normal', 'italic'],
          },
        ],
      },
    }),
    {
      name: 'inject-umami',
      transformIndexHtml (html, ctx) {
        if (!ctx.bundle) {
          return
        }

        return [{
          tag: 'script',
          attrs: {
            'defer': true,
            'src': 'https://umami.vuetifyjs.com/script.js',
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
