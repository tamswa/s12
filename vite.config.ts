import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // للنشر على Vercel أو نطاق مخصص، اترك base كـ '/'
  // للنشر على GitHub Pages، غيّر إلى '/s12/'
  base: '/', 
  build: {
    target: 'es2015',
    cssCodeSplit: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['lucide-react'],
        },
      },
    },
  },
})
