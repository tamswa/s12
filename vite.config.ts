import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // التعديل هنا: تحديد المسار الأساسي ليناسب مجلد s12 على GitHub Pages
  base: '/s12/', 
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
