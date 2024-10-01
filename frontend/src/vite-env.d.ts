import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:5000', // Backend server address
        changeOrigin: true, // For virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: rewrite path if needed
      },
    },
  },
});
