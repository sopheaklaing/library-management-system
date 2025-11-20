import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows access from LAN / external
    port: 5173, // optional if you want to ensure the port
    strictPort: true,
    allowedHosts: [
      'increases-figure-tomatoes-typing.trycloudflare.com', // no extra space
    ],
    base: '/tailwindcss4-OOD-Book/'
  },
});
