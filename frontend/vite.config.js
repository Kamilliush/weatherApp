import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirecting requests to /weather to backend
      '/weather': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
    },
  },
});
