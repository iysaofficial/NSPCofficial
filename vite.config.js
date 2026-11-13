import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ganti 'dist' dengan nama direktori yang diinginkan
    rollupOptions: {
      external: ['react-bootstrap/Nav'], // Tambahkan modul yang perlu di-externalize di sini
    },
  },
});
