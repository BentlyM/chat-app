/// <reference types="vite/client" />

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
      },
    },
  },
});
