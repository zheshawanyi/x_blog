import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      
    }
  },
  server:{
    proxy:{
      '/api':{
        target:'https://www.fastmock.site/mock/018a7d4eac618f3482b07584290c6773/x_blog',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,"")
      }
    }
  }
})
