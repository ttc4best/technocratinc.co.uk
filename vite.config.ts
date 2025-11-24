// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',                // ← this line fixes 99% of blank pages
  build: {
    outDir: 'dist',         // ← make sure it's dist (not build)
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})